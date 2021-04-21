import Modal from 'Src/components/modal/Modal.vue';

export default {
    title: 'Modal',
};


const data = {
    "heading": "Modal",
    "content": "<p>Mauris in varius arcu. Sed ut libero molestie, imperdiet nisi vitae, sodales ante. In mi enim, aliquam interdum turpis in, pellentesque luctus dolor. Maecenas egestas pellentesque ultricies. Donec at neque at odio fermentum ullamcorper. Nulla non bibendum tellus.</p>",
    "buttonText": "Click Me",
    "isValid": true,
    "documentType": "modal",
    "key": "00000000-0000-0000-0000-000000000000"
};


export const ModalMain = () => ({
    components: { Modal },
    template: `<modal :item='${JSON.stringify(data)}' />`,
});








