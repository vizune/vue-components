import Pagination from 'Src/components/pagination/Pagination-storybook.vue';

export default {
    title: 'Pagination',
};

export const PaginationComponent = () => ({
    components: { Pagination },
    template: `<pagination />`,
});
