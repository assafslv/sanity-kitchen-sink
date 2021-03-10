export default {
  widgets: [
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
                  buildHookId: '604938ce1aa0a80672466e16',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kuc4gyrd',
                  apiId: '65e1cf91-b23a-4caf-bd36-f07bde00f5e8'
                },
                {
                  buildHookId: '604938cfa8d9040989a0c68b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-a6ubmhmv',
                  apiId: '2f945050-a95f-4c13-aa21-c5fa07e93353'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/assafslv/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-a6ubmhmv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
