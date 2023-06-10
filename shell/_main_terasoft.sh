#!/bin/bash
action=$1
if [[ -z "$action" || "$action" == "--help" ]]; then
  echo "  ====== TeraSoft ======"
  echo "  cd                 cd into terasoft"
  echo "  t.  deploy"
  echo "  g.  push"
else
 case $action in
  "cd")
	  source cd-ts.sh
	;;

    "t.deploy")
	  source cd-ts.sh
      aws s3 sync . s3://www.terasoft.ai/ --exclude ".git/*" --exclude "sass/*" --exclude "css/*" --exclude "demos/*" --exclude "images/*" --exclude "include/*" --exclude "js/*"
      aws cloudfront create-invalidation --distribution-id E2H5DT29PLMKB5 --paths "/*"
	;;


  "g.push")
	  source cd-ts.sh
      git add .
      git commit -m "$2"
      git push
	;;


  *)
    # Handle unknown or missing arguments
    echo "Invalid or missing argument. Please specify a valid action or use --help for usage information."
    ;;

 esac
fi

