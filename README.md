
## Deployment

To deploy this website to GitHub Pages, follow these steps:

1. Update the `homepage` field in the `package.json` file with your GitHub Pages URL:

```json
"homepage": "https://<your-username>.github.io/micahkepe.github.io"
```

2. Build the project:

```bash
npm run build
```

3. Deploy the project to GitHub Pages:

```bash
npm run deploy
```

Part of the deployment script is building the Zola blog. If you don't want to
build the blog, you can remove the ` && npm run build:blog` command from end of
the `deploy` script in the `package.json` file.

4. Visit your GitHub Pages URL to view your deployed website.

Make sure to update the content in the `src/components/views` directory with your
information, projects, and blog posts. Additionally, remove or replace the content
in the `blog/content` directory with your own blog posts. You can also update the
theme using a different Zola theme or create your own.

## Usage and Attribution

If you decide to use my website code, please give me credit by linking back to
this repository or mentioning my name. It's important to respect the effort and
'work of developers. Any use of this code without proper attribution is not
endorsed.

## Contributing

I welcome contributions to improve the website. If you find any bugs or have
suggestions for new features, please open an issue or submit a pull request.

If you are interested in contributing to the Zola blog theme, see the repository
[here](https://github.com/micahkepe/after-after-dark).

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for visiting my personal website repository! Feel free to explore the
code and check back later for updates.
