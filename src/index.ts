import { App } from 'vue';
import Modal from './components/Modal.vue';

const MyPlugin = {
    install(app: App) {
        // Регистрация глобального компонента
        app.component('Modal', Modal);

        // Добавление методов в глобальный экземпляр Vue
        app.config.globalProperties.$modal = {
            open: (data: object) => {
                // Логика для открытия модального окна
                console.log('Open modal with data:', data);
            },
            close: () => {
                // Логика для закрытия модального окна
                console.log('Close modal');
            },
        };
    },
};

export default MyPlugin;
