curl -X POST -H "Content-Type: application/json" -d '{"Text":"Repo Name:'$BITBUCKET_REPO_FULL_NAME' Branch:'$BITBUCKET_BRANCH'  Running Build ..."}'  $WEBHOOK_URL &&
npm install &&
npm run build &&
curl -X POST -H "Content-Type: application/json" -d '{"Text":"Repo Name:'$BITBUCKET_REPO_FULL_NAME' Branch:'$BITBUCKET_BRANCH'   Build Completed"}'  $WEBHOOK_URL 
