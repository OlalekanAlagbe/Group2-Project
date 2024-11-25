export async function loadComponent(name) {
    try {
        const response = await fetch(`/components/${name}.html`);
        if (!response.ok) {
            console.error(`Failed to load ${name} component:`, response.statusText);
            return '';
        }
        const content = await response.text();
        return content.replace(/\.\.\/assets\//g, '/');
    } catch (error) {
        console.error(`Error loading ${name} component:`, error);
        return '';
    }
} 