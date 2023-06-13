#!/bin/bash
action=$1
if [[ -z "$action" || "$action" == "--help" ]]; then
  echo "  ====== TeraSoft ======"
  echo "                      cd,  dev, build, deploy push"
  echo "  ww.                 canv, dist"
  echo "  g.                  push"
else
 case $action in
  "cd")
	  source cd-ts.sh
	;;

  "dev")
	  source cd-ts.sh
    yarn dev
	;;

  "build")
	  source cd-ts.sh
    yarn build
	;;

  "deploy")
	  source cd-ts.sh
      # aws s3 rm s3://www.terasoft.ai --recursive
      #aws s3 sync . s3://www.terasoft.ai/ --exclude ".git/*" --exclude "sass/*" --exclude "css/*" --exclude "demos/*" --exclude "images/*" --exclude "include/*" --exclude "js/*"
      aws s3 sync ./dist s3://www.terasoft.ai/
      aws cloudfront create-invalidation --distribution-id E2H5DT29PLMKB5 --paths "/*"
	;;

  "push")
	  source cd-ts.sh
      git add .
      git commit -m "$2"
      git push
	;;

  "ww.canv")
	  source cd-ts.sh
    cd src/templates
    npx http-server -p 8990
	;;

  "ww.dist")
	  source cd-ts.sh
    cd dist
    npx http-server -p 8991
	;;




  *)
    # Handle unknown or missing arguments
    echo "Invalid or missing argument. Please specify a valid action or use --help for usage information."
    ;;

 esac
fi

