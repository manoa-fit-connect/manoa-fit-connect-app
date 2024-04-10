[![ci-meteor-application-template-react](https://github.com/ics-software-engineering/meteor-application-template-react/actions/workflows/ci.yml/badge.svg)](https://github.com/ics-software-engineering/meteor-application-template-react/actions/workflows/ci.yml)

For details, please see http://ics-software-engineering.github.io/meteor-application-template-react/

TODO:
config/settings.development.json
    tbd
app/imports/ui/layouts/App.jsx
    tbd
app/imports/ui/pages/Landing.jsx
    tbd, besides making it more readable
app/imports/ui/pages/UserProfile.jsx
    remove stuff references
    create the bootstrap actual page
app/imports/ui/components/Profile.jsx
    remove stuff references
    create the component
    add profile prop types
    maybe don't need a profile component
    but availability and description components might be cool?
    profile creating and editing could just be part of the page?
    hmm, what else can be components?
app/imports/api/profile/Profiles.js
    probably remove the allowed values from many of them
    change them to be options on the page/component instead
    find all the sneaky pub stuff
components
editing
user reg
admin parts