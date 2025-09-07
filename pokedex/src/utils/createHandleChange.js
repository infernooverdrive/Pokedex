export const createHandleChange = (setValues) => (event) => {
    const path = event.target.name.split('.');
    const raw = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const value = (typeof raw === 'string' && raw.trim() !== '' && !isNaN(raw)) ? Number(raw) : raw;

    setValues(prev => {
        const updated = { ...prev };
        path.reduce((acc, key, idx) => {
            if (idx === path.length - 1) acc[key] = value; else acc[key] ??= {};
            return acc[key];
        }, updated);
        return updated;
    });

    console.log(`Field ${event.target.name} changed to: ${value} (${typeof value})`);
};
