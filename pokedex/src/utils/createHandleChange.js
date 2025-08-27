export const createHandleChange = (setValues) => (event) => {
    const path = event.target.name.split('.');
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setValues(prev => {
        // Make a shallow clone of the state
        const updatedState = { ...prev };

        // Traverse the path, creating objects as needed
        path.reduce((acc, key, index) => {
            if (index === path.length - 1) {
                acc[key] = value;
            } else {
                if (!acc[key]) acc[key] = {};
                return acc[key];
            }
        }, updatedState)

        return updatedState;
    });

    console.log(`Field ${event.target.name} changed to: ${value}`);
};