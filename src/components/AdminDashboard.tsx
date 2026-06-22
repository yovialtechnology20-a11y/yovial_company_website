import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Plus, Pencil, Trash2, LogOut, ExternalLink, ShieldCheck, X,
  Save, KeyRound, ArrowLeft, Image as ImageIcon, GripVertical,
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { supabase, type Project } from '../lib/supabase';

type EditForm = {
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string;
  live_url: string;
  sort_order: string;
};

const emptyForm: EditForm = {
  title: '', category: '', image: '', description: '', tags: '', live_url: '', sort_order: '0',
};

export default function AdminDashboard({ onBack }: { onBack: () => void }) {
  const { username, logout, changePassword } = useAdmin();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<EditForm>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState('');

  // password change
  const [showPwdModal, setShowPwdModal] = useState(false);
  const [pwdForm, setPwdForm] = useState({ old: '', next: '', confirm: '' });
  const [pwdMsg, setPwdMsg] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [pwdLoading, setPwdLoading] = useState(false);

  const loadProjects = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true });
    if (error) {
      setFormError(error.message);
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => { loadProjects(); }, [loadProjects]);

  const openNew = () => {
    setEditing(null);
    setForm({ ...emptyForm, sort_order: String(projects.length + 1) });
    setFormError('');
    setShowForm(true);
  };

  const openEdit = (p: Project) => {
    setEditing(p);
    setForm({
      title: p.title,
      category: p.category,
      image: p.image,
      description: p.description,
      tags: p.tags.join(', '),
      live_url: p.live_url || '',
      sort_order: String(p.sort_order),
    });
    setFormError('');
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    const tags = form.tags.split(',').map((t) => t.trim()).filter(Boolean);
    const payload = {
      title: form.title.trim(),
      category: form.category.trim(),
      image: form.image.trim(),
      description: form.description.trim(),
      tags,
      live_url: form.live_url.trim() || null,
      sort_order: parseInt(form.sort_order) || 0,
    };
    if (!payload.title || !payload.category || !payload.image || !payload.description) {
      setFormError('Title, category, image URL, and description are required.');
      return;
    }
    setSaving(true);
    let error;
    if (editing) {
      ({ error } = await supabase.from('projects').update(payload).eq('id', editing.id));
    } else {
      ({ error } = await supabase.from('projects').insert(payload));
    }
    setSaving(false);
    if (error) { setFormError(error.message); return; }
    setShowForm(false);
    await loadProjects();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this project? This cannot be undone.')) return;
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) { alert(error.message); return; }
    await loadProjects();
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdMsg(null);
    if (pwdForm.next.length < 6) {
      setPwdMsg({ type: 'error', text: 'New password must be at least 6 characters.' });
      return;
    }
    if (pwdForm.next !== pwdForm.confirm) {
      setPwdMsg({ type: 'error', text: 'New passwords do not match.' });
      return;
    }
    setPwdLoading(true);
    const res = await changePassword(pwdForm.old, pwdForm.next);
    setPwdLoading(false);
    if (!res.ok) {
      setPwdMsg({ type: 'error', text: res.error || 'Failed to change password.' });
      return;
    }
    setPwdMsg({ type: 'success', text: 'Password changed successfully!' });
    setPwdForm({ old: '', next: '', confirm: '' });
    setTimeout(() => { setShowPwdModal(false); setPwdMsg(null); }, 2000);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-dark-950/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <ShieldCheck size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg leading-none">Admin Dashboard</h1>
              <p className="text-dark-400 text-xs mt-0.5">Logged in as <span className="text-blue-400 font-medium">{username}</span></p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowPwdModal(true)} className="btn-glass text-sm py-2 px-4 gap-2">
              <KeyRound size={15} /> Change Password
            </button>
            <button onClick={() => { logout(); onBack(); }} className="btn-glass text-sm py-2 px-4 gap-2 hover:border-red-500/30 hover:text-red-400">
              <LogOut size={15} /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display font-bold text-2xl">Projects</h2>
            <p className="text-dark-400 text-sm mt-0.5">{projects.length} project{projects.length !== 1 ? 's' : ''} live on your website</p>
          </div>
          <button onClick={openNew} className="btn-primary text-sm py-2.5 px-5 gap-2">
            <Plus size={16} /> Add Project
          </button>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-2xl h-72 animate-pulse" />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="glass rounded-3xl p-12 text-center border border-white/5">
            <ImageIcon size={48} className="mx-auto text-dark-600 mb-4" />
            <h3 className="font-display font-semibold text-lg text-white mb-1">No projects yet</h3>
            <p className="text-dark-400 text-sm mb-5">Add your first project to showcase on the website.</p>
            <button onClick={openNew} className="btn-primary text-sm py-2.5 px-5 gap-2 mx-auto">
              <Plus size={16} /> Add First Project
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl overflow-hidden border border-white/5 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent" />
                  <span className="absolute top-3 left-3 glass text-xs text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/30">
                    {p.category}
                  </span>
                  <span className="absolute top-3 right-3 glass text-xs text-white px-2 py-1 rounded-full flex items-center gap-1">
                    <GripVertical size={10} /> {p.sort_order}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-white mb-1.5 truncate">{p.title}</h3>
                  <p className="text-dark-400 text-xs line-clamp-2 mb-3">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => openEdit(p)} className="flex-1 btn-glass text-xs py-2 gap-1.5 justify-center">
                      <Pencil size={13} /> Edit
                    </button>
                    <button onClick={() => handleDelete(p.id)} className="btn-glass text-xs py-2 px-3 hover:border-red-500/30 hover:text-red-400">
                      <Trash2 size={13} />
                    </button>
                    {p.live_url && (
                      <a href={p.live_url} target="_blank" rel="noreferrer" className="btn-glass text-xs py-2 px-3">
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <button onClick={onBack} className="mt-8 flex items-center gap-2 text-dark-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={15} /> Back to Website
        </button>
      </main>

      {/* Project form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowForm(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-3xl border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-dark-900/95 backdrop-blur px-6 py-4 flex items-center justify-between border-b border-white/5">
              <h2 className="font-display font-bold text-lg text-white">{editing ? 'Edit Project' : 'Add New Project'}</h2>
              <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-lg glass flex items-center justify-center text-dark-400 hover:text-white">
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-4">
              {formError && (
                <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {formError}
                </div>
              )}

              {/* Image preview */}
              {form.image && (
                <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10">
                  <img src={form.image} alt="preview" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-dark-300 text-sm mb-1.5 block">Title *</label>
                  <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Project title"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 text-sm" />
                </div>
                <div>
                  <label className="text-dark-300 text-sm mb-1.5 block">Category *</label>
                  <input type="text" required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                    placeholder="e.g. Restaurant, Hospitality"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 text-sm" />
                </div>
              </div>

              <div>
                <label className="text-dark-300 text-sm mb-1.5 block">Image URL *</label>
                <input type="url" required value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                  placeholder="https://images.pexels.com/..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 text-sm" />
              </div>

              <div>
                <label className="text-dark-300 text-sm mb-1.5 block">Description *</label>
                <textarea required rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Short description of the project"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 text-sm resize-none" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-dark-300 text-sm mb-1.5 block">Tags (comma separated)</label>
                  <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    placeholder="React, Tailwind, Vercel"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 text-sm" />
                </div>
                <div>
                  <label className="text-dark-300 text-sm mb-1.5 block">Live URL (optional)</label>
                  <input type="url" value={form.live_url} onChange={(e) => setForm({ ...form, live_url: e.target.value })}
                    placeholder="https://..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 text-sm" />
                </div>
              </div>

              <div>
                <label className="text-dark-300 text-sm mb-1.5 block">Sort Order</label>
                <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 text-sm" />
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 btn-glass py-3 justify-center text-sm">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="flex-1 btn-primary py-3 justify-center text-sm disabled:opacity-50">
                  <Save size={15} /> {saving ? 'Saving...' : editing ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Password change modal */}
      {showPwdModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowPwdModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-3xl border border-white/10 w-full max-w-md"
          >
            <div className="px-6 py-4 flex items-center justify-between border-b border-white/5">
              <h2 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <KeyRound size={18} className="text-blue-400" /> Change Password
              </h2>
              <button onClick={() => setShowPwdModal(false)} className="w-8 h-8 rounded-lg glass flex items-center justify-center text-dark-400 hover:text-white">
                <X size={16} />
              </button>
            </div>
            <form onSubmit={handleChangePassword} className="p-6 space-y-4">
              {pwdMsg && (
                <div className={`px-4 py-3 rounded-xl text-sm border ${
                  pwdMsg.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}>
                  {pwdMsg.text}
                </div>
              )}
              <div>
                <label className="text-dark-300 text-sm mb-1.5 block">Current Password</label>
                <input type="password" required value={pwdForm.old} onChange={(e) => setPwdForm({ ...pwdForm, old: e.target.value })}
                  placeholder="Enter current password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 text-sm" />
              </div>
              <div>
                <label className="text-dark-300 text-sm mb-1.5 block">New Password</label>
                <input type="password" required value={pwdForm.next} onChange={(e) => setPwdForm({ ...pwdForm, next: e.target.value })}
                  placeholder="At least 6 characters"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 text-sm" />
              </div>
              <div>
                <label className="text-dark-300 text-sm mb-1.5 block">Confirm New Password</label>
                <input type="password" required value={pwdForm.confirm} onChange={(e) => setPwdForm({ ...pwdForm, confirm: e.target.value })}
                  placeholder="Re-enter new password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-dark-500 focus:outline-none focus:border-blue-500/50 text-sm" />
              </div>
              <button type="submit" disabled={pwdLoading} className="w-full btn-primary py-3 justify-center text-sm disabled:opacity-50">
                {pwdLoading ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
