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
                  buildHookId: '5f64ad551da86e262d05c379',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ntpjqumk',
                  apiId: '41835564-2719-46b0-9057-518608eb40e1'
                },
                {
                  buildHookId: '5f64ad55216807297b756fd0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-38y5iyr8',
                  apiId: 'c6fab2f5-1c35-4aff-9cd0-91a452c94e6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fugelset/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-38y5iyr8.netlify.app', category: 'apps'}
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
