# RPMWare Assets

Shared assets used on rpmware.com and related sites.

## Deployment Steps

```
Run `rake deploy` from assets directory.
Upload created directory to assets.rpmware.com S3
Find/replace all old folder with new in rpmware_com/public/wp-content/themes/rpmware
Find/replace all old folder with new in Assistly Admin -> Edit Template -> Header
Find/replace all old folder with new in Assistly Admin -> Edit Template -> Layout
Find/replace all old folder with new in RPMWare.Core solution.
Deploy wordpress site.
Deploy RPMWare.Core.
```
