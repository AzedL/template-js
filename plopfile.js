module.exports = (plop) => {
  plop.setGenerator('js', {
    description: 'javascript',
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'title',
        default: 'title',
      },
      {
        type: 'input',
        name: 'test',
        message: 'test?',
        default: 'y',
      },
    ],
    actions(prompts) {
      return answerYes(prompts.test)
        ? [
            {
              type: 'add',
              path: 'src/{{kebabCase title}}/index.js',
              templateFile: 'template/js/index.hbs',
            },
            {
              type: 'add',
              path: 'test/{{kebabCase title}}/index.test.js',
              templateFile: 'template/js/test.hbs',
            },
          ]
        : [
            {
              type: 'add',
              path: 'src/{{kebabCase title}}/index.js',
              templateFile: 'template/js/index.hbs',
            },
          ]
    },
  })
}

function answerYes(answer) {
  return ['y', 'ye', 'ys', 'yes'].includes(answer.toLowerCase())
}
