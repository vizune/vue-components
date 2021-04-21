import Accordion from 'Src/components/accordion/Accordion.vue';

export default {
    title: 'Accordion',
  };

const data = [
    {
        "name": "Lorem ipsum 1",
        "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ex maximus, venenatis nisl dapibus, ullamcorper mauris. Nam massa augue, ultricies ac odio quis, consectetur aliquet erat. Integer vel cursus est. Vivamus luctus risus leo, vel blandit dui sollicitudin a. Aenean nulla nulla, sodales in congue ac, varius tristique augue."
    },
    {
        "name": "Lorem ipsum 2",
        "content": "Suspendisse ac lectus eu velit lobortis feugiat. Nunc nisi quam, euismod vitae viverra vitae, tempor quis elit. Suspendisse ante nisi, ultricies sed nunc a, sagittis suscipit urna. Morbi varius pharetra bibendum. Proin quis tempus turpis, sit amet ultrices est. Maecenas ac lacinia velit, id viverra tortor."
    },
    {
        "name": "Lorem ipsum 3",
        "content": "Suspendisse a sodales velit. Mauris vel gravida nunc. Fusce augue lorem, bibendum non lectus sit amet, vehicula varius leo. Vestibulum luctus iaculis libero sit amet auctor. Fusce sodales ut quam id tempus. Aliquam accumsan nunc et tincidunt rhoncus. Nullam in libero a urna dictum rutrum in sit amet sem."
    },
    {
        "name": "Lorem ipsum 4",
        "content": "Donec vitae aliquam quam, eget aliquam ante. Nam finibus orci sit amet faucibus laoreet. Sed congue neque sed ex elementum rhoncus. Nam quis nulla massa. Praesent condimentum ante magna, vitae accumsan metus ullamcorper vitae. In id tortor quis leo venenatis lobortis venenatis ut est. In hac habitasse platea dictumst. Donec tristique sodales quam quis dignissim."
    }
];

export const AccordionDarkBackground = () => ({
    components: { Accordion },
    template: `<accordion :darkBackground="` + true + `" :items="` + data + `" />`,
});

export const AccordionNoBackground = () => ({
    components: { Accordion },
    template: `<accordion :items="` + data + `" />`,
});

export const AccordionLineDivide = () => ({
    components: { Accordion },
    template: `<accordion :lineDivide="` + true + `" :items="` + data + `" />`,
});

