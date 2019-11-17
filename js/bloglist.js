//  Redirecting to post.html page
function fullPost(){
    window.location.href="./post.html";
  }

  // pressing trash button block appears
  function onDeletePost(){
    document.getElementById('deletePostPrompt').style.display='block';
  }
  
  // on pressing no block disappears
  function onCloseDeleteClicked() {
    document.getElementById('deletePostPrompt').style.display='none';
  }
  
  