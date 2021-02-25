export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6037b83ab193e6343fe911c0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-c9arkxjf',
                  apiId: '528fa688-0816-4513-a526-e45e911c05ae'
                },
                {
                  buildHookId: '6037b83b55b0192819698af8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ij2eimxs',
                  apiId: 'd18b66dd-75d3-4e02-9c89-332ff1254837'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/famuyiwadayo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ij2eimxs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
