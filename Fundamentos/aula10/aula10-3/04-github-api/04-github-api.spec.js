const {
  getRepos
} = require('./04-github-api')

describe('async/await - retrieve github repo name', () => {
  describe('in the function getRepos()', () => {
    it('should return specific repo name', async () => {
      const url = 'https://api.github.com/orgs/tryber/repos'
      expect(await getRepos(url)).toContain('sd-01-week4-5-project-todo-list')
      expect(await getRepos(url)).toContain('sd-01-week4-5-project-meme-generator')
    })
  })
})
