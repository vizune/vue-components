// In order to use templates:
// import example from 'Templates/example-template'
// example: data.results.map(result => example(result));

import moment from 'moment';
export default ({ ID, Title, Url, Published, accessLevel, Thumbnail, Caption, ExampleType }) => 
`<a href="${Url}" class="Example-link" data-id="${ID}">
    <div class="Example-item">
      ${ExampleType === 1 || ExampleType === 3 ? ` 
        <div class="Example-cover${Thumbnail ? `` : ` Example-cover--empty`}">
            ${accessLevel && accessLevel >= 50 ? `
                <div class="ExampleLogo">
                    <svg class="ExampleLogo-logo"><use xlink:href="#example-logo-only" /></svg>
                </div>
            ` : ``}
            <img class="Example-image" src="${Thumbnail ? Thumbnail : `/assets/images/example.jpg`}" / >
        </div>
        ` : ""}
        <div class="Example-content">
            ${accessLevel && accessLevel >= 50 && ExampleType === 0 ? `<span class="Example-addition">Special Content</span>` : ``}
            <h3 class="Example-title">${Title}</h3>
            ${ExampleType && ExampleType === 1 ? `<p class="Example-detail">${moment(Published).format('Do MMMM YYYY')}</p>` : ``}
            ${Caption && ContentType === 0 ? `<p class="Example-description">${Caption}</p>` : ``}
        </div>
    </div>
</a>`