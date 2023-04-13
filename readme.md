# Local Development Boilerplate using 11ty/tailwind for Static Sites and/or HubSpot Themes

⚠️ This boilerplate template is still in development, use at your own risk ⚠️

Minimal boilerplate for local development. HubSpot part WIP

11ty is flexible with templating languages. Feel free to mix it up.

Commands:
- npm run start
- npm run build (not yet configured for hubspot)
- npm fetch-theme:overwrite (for fetching hubspot changes)
- npm run build:upload (for build and uploading assets to the hubspot theme)
- npm run build:static (for build and static site deployment)

Tooling:
- 11ty for SSG
- nunjucks templating language
- esbuild for js
- postcss/tailwind for css

Docs/Reference:
- [11ty](https://www.11ty.dev/docs/)
- [Nunjucks](https://mozilla.github.io/nunjucks/templating.html)
- [Tailwind](https://tailwindcss.com/docs/installation)
  
Source: 
- based on 11ty starter template [YATAS](https://github.com/yhaefliger/YATAS) (without alpineJS)


Notes:
- doesn't include js/css hashing for production SSG.
- you can add dummy data (js/json files) in "_data" folder which is accessible globally without imports
- built static assets will output to "_site" (11ty's default generated folder)

‼️ Important ‼️ 
for "static-only" projects:
 - ✅ change the npm config dir name to "_site"
 - ✅ use `npm run build:static`

 while for hubspot-theme projects:
 - ✅ match the npm config dir name to the respective theme folder's name from hubspot
 - ✅ use `npm run build:upload` (bundled assets will be in a /dist folder and uploaded to the dist folder of the hubspot theme)

