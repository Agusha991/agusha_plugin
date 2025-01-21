import { App } from 'vue';
import Modal from './components/Modal.vue';

export default {
    install(app: App) {
        // Register the Modal component globally
        app.component('Modal', Modal);
        console.log('agusha_nikita plugin initialized!');

        // Modal methods
        const modalMethods = {
            open(name: string, options: Record<string, any> = {}) {
                console.log(`Opening modal: ${name}`, options);
                // Your modal opening logic here
            },
            close(id: number) {
                console.log(`Closing modal: ${id}`);
                // Your modal closing logic here
            },
        };

        // Make $modal globally accessible
        app.config.globalProperties.$modal = modalMethods;
    },
};

// Extend Vue typings to include $modal
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $modal: {
            open: (name: string, options?: Record<string, any>) => void;
            close: (id: number) => void;
        };
    }
}
