import { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';

const events = [
  { value: 'code-puzzle', label: 'Code Puzzle', icon: '💻', category: 'technical' },
  { value: 'project-exhibition', label: 'Project Exhibition', icon: '🔬', category: 'technical' },
  { value: 'robo-race', label: 'Robo Race', icon: '🤖', category: 'technical' },
  { value: 'technical-poster', label: 'Technical Poster', icon: '📊', category: 'technical' },
  { value: 'cultural-events', label: 'Cultural Events', icon: '🎭', category: 'cultural' },
  { value: 'rangoli-competition', label: 'Rangoli Competition', icon: '🎨', category: 'cultural' },
  { value: 'food-without-fire', label: 'Food Without Fire', icon: '🍳', category: 'cultural' },
  { value: 'nukkad-natak', label: 'Nukkad Natak', icon: '🎪', category: 'cultural' },
  { value: 'singing', label: 'Singing', icon: '🎤', category: 'cultural' },
  { value: 'dance-competition', label: 'Dance Competition', icon: '💃', category: 'cultural' },
  { value: 'rock-band', label: 'Rock Band', icon: '🎸', category: 'cultural' },
  { value: 'short-film-maker', label: 'Short Film Maker', icon: '🎬', category: 'cultural' },
  { value: 'ad-mad-show', label: 'Ad Mad Show', icon: '📺', category: 'cultural' },
  { value: 'treasure-hunt', label: 'Treasure Hunt', icon: '🗺️', category: 'fun' },
];

const colleges = [
  'ABESIT, Ghaziabad', 'IMS Engineering College, Ghaziabad', 'ABES Engineering College, Ghaziabad',
  'AKGEC, Ghaziabad', 'JSS Noida', 'RKGIT, Ghaziabad', 'GL Bajaj, Noida',
  'HI-TECH Institute of Engineering and Technology, Ghaziabad', 'NIET', 'GNIOT',
  'Galgotias University', 'Galgotias College', 'KIET', 'Bhagwati Institute of Technology',
  'H.R. Group of Institutions', 'INMANTEC Institutions', 'OTHER'
].map(inst => ({ value: inst, label: inst }));

const schools = [
  'Delhi Public School (DPS), Ghaziabad', 'Kendriya Vidyalaya, Ghaziabad', 'OTHER'
].map(inst => ({ value: inst, label: inst }));

const courses = ['btech', 'bpharma', 'bca', 'bba', 'bcom', 'bsc', 'polytechnic', 'mtech', 'mpharma', 'mca', 'mba', 'mcom', 'msc', 'bed'].map(c => ({ value: c, label: c.toUpperCase() }));

const branches = ['cse & allied branches', 'it', 'ece', 'me', 'ee', 'civil', 'cse'].map(b => ({ value: b, label: b.toUpperCase() }));

const years = [1,2,3,4].map(y => ({ value: y, label: y }));

const classes = [9,10,11,12].map(c => ({ value: c, label: c }));

const teamSizes = Array.from({ length: 10 }, (_, i) => i + 1).map(s => ({ value: s, label: `${s} (${s === 1 ? 'Solo' : 'Members'})` }));

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderMobile: '',
    leaderWhatsapp: '',
    leaderEmail: '',
    leaderRollNo: '',
    event: null,
    teamSize: 1,
    teamMembers: [],
    institution: null,
    studentType: 'college',
    course: null,
    branch: null,
    year: null,
    class: null,
    idProof: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'leaderName' && value.length < 4) error = 'Name min 4 chars';
    if (name === 'leaderEmail' && !/\S+@\S+\.\S+/.test(value)) error = 'Invalid email';
    if (['leaderMobile', 'leaderWhatsapp'].includes(name) && (!/^[6-9]\d{9}$/.test(value))) error = 'Indian 10-digit number';
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSelect = (name, selected) => {
    setFormData({ ...formData, [name]: selected });
  };

  const handleTeamSize = (selected) => {
    const size = selected.value;
    const members = Array.from({ length: size - 1 }, () => ({ name: '', email: '' }));
    setFormData({ ...formData, teamSize: size, teamMembers: members });
  };

  const handleMemberChange = (index, field, value) => {
    const members = [...formData.teamMembers];
    members[index][field] = value;
    setFormData({ ...formData, teamMembers: members });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 3 * 1024 * 1024) {
      toast.error('File too large (<3MB)');
      return;
    }
    if (file && !file.type.startsWith('image/')) {
      toast.error('Image only');
      return;
    }
    setFormData({ ...formData, idProof: file });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (['leaderName', 'leaderEmail', 'leaderMobile', 'leaderWhatsapp'].includes(key)) {
        const err = validateField(key, formData[key]);
        if (err) {
          newErrors[key] = err;
          valid = false;
        }
      }
    });
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Please fix errors');
      return;
    }
    setLoading(true);
    setProgress(0);
    const submitData = {
      ...formData,
      institution: formData.institution?.value,
      course: formData.course?.value,
      branch: formData.branch?.value,
      year: formData.year?.value,
      class: formData.class?.value,
      event: formData.event ? { value: formData.event.value, label: formData.event.label, category: formData.event.category } : null,
    };
    const data = new FormData();
    data.append('data', JSON.stringify(submitData));
    if (formData.idProof) data.append('idProof', formData.idProof);

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/registrations`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (prog) => setProgress(Math.round((prog.loaded * 100) / prog.total)),
      });
      toast.success('Registration successful!');
      toast.success('Check your email for confirmation.');
    } catch (err) {
      toast.error('Submission failed: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-linear-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-2xl w-full max-w-4xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-800">CROSSROADS 2026 Registration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Team Name</label>
          <input name="teamName" placeholder="Team Name" onChange={handleChange} required className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Leader Name</label>
          <input name="leaderName" placeholder="Team Leader Name" onChange={handleChange} required className="border p-2 w-full rounded" />
          {errors.leaderName && <p className="text-red-500 text-xs">{errors.leaderName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Mobile</label>
          <input name="leaderMobile" placeholder="Mobile" onChange={handleChange} required className="border p-2 w-full rounded" />
          {errors.leaderMobile && <p className="text-red-500 text-xs">{errors.leaderMobile}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">WhatsApp</label>
          <input name="leaderWhatsapp" placeholder="WhatsApp" onChange={handleChange} required className="border p-2 w-full rounded" />
          {errors.leaderWhatsapp && <p className="text-red-500 text-xs">{errors.leaderWhatsapp}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="leaderEmail" placeholder="Email" onChange={handleChange} required className="border p-2 w-full rounded" />
          {errors.leaderEmail && <p className="text-red-500 text-xs">{errors.leaderEmail}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Roll No/ID</label>
          <input name="leaderRollNo" placeholder="Roll No/Student ID" onChange={handleChange} required className="border p-2 w-full rounded" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Event</label>
          <Select options={events} onChange={(sel) => handleSelect('event', sel)} placeholder="Choose Event" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Team Size</label>
          <Select options={teamSizes} value={teamSizes.find(s => s.value === formData.teamSize)} onChange={handleTeamSize} placeholder="Team Size" />
        </div>
        {formData.teamMembers.map((_, index) => (
          <div key={index} className="col-span-2 grid grid-cols-2 gap-4">
            <input placeholder={`Member ${index + 1} Name`} onChange={(e) => handleMemberChange(index, 'name', e.target.value)} required className="border p-2 rounded" />
            <input placeholder={`Member ${index + 1} Email`} onChange={(e) => handleMemberChange(index, 'email', e.target.value)} required className="border p-2 rounded" />
          </div>
        ))}
        <div className="col-span-2">
          <label className="block text-sm font-medium">Student Type</label>
          <div className="flex space-x-4">
            <label><input type="radio" name="studentType" value="college" checked={formData.studentType === 'college'} onChange={handleChange} /> College</label>
            <label><input type="radio" name="studentType" value="school" checked={formData.studentType === 'school'} onChange={handleChange} /> School</label>
          </div>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium">Institution</label>
          <Select options={formData.studentType === 'college' ? colleges : schools} onChange={(sel) => handleSelect('institution', sel)} placeholder="Select Institution" />
        </div>
        {formData.studentType === 'college' ? (
          <>
            <div><Select options={courses} onChange={(sel) => handleSelect('course', sel)} placeholder="Course" /></div>
            <div><Select options={branches} onChange={(sel) => handleSelect('branch', sel)} placeholder="Branch" /></div>
            <div><Select options={years} onChange={(sel) => handleSelect('year', sel)} placeholder="Year" /></div>
          </>
        ) : (
          <div className="col-span-2"><Select options={classes} onChange={(sel) => handleSelect('class', sel)} placeholder="Class" /></div>
        )}
        <div className="col-span-2">
  <label className="block text-sm font-medium">
    ID Proof (Image &lt;3MB)
  </label>
  <input 
    type="file" 
    onChange={handleFile} 
    accept="image/*" 
    required 
    className="mt-1 block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-indigo-50 file:text-indigo-700
      hover:file:bg-indigo-100"
  />
  {progress > 0 && (
    <div className="bg-blue-200 h-2 rounded mt-2 overflow-hidden">
      <div 
        className="bg-blue-500 h-full rounded transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  )}
</div>
      </div>
      <button type="submit" disabled={loading} className="mt-6 bg-indigo-600 text-white p-3 w-full rounded hover:bg-indigo-700 flex justify-center">
        {loading ? <Loader2 className="animate-spin" /> : 'Submit'}
      </button>
    </form>
  );
};

export default RegistrationForm;