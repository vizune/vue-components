import TableDefault from 'Src/components/tables/Default.vue';
import TableStripes from 'Src/components/tables/Stripes.vue';
import TableDark from 'Src/components/tables/Dark.vue';
import TableResponsive from 'Src/components/tables/Responsive.vue';
import TableSort from 'Src/components/tables/Sort.vue';
import TablePagination from 'Src/components/tables/Pagination.vue';

export default {
  title: 'Tables',
};

export const Default = () => ({
  components: { TableDefault },
  template: '<table-default></table-default>',
});

export const Stripes = () => ({
  components: { TableStripes },
  template: '<table-stripes></table-stripes>',
});

export const Dark = () => ({
  components: { TableDark },
  template: '<table-dark></table-dark>',
});

export const Responsive = () => ({
  components: { TableResponsive },
  template: '<table-responsive></table-responsive>',
});

export const Sort = () => ({
  components: { TableSort },
  template: '<table-sort></table-sort>',
});

export const Pagination = () => ({
  components: { TablePagination },
  template: '<table-pagination></table-pagination>',
});