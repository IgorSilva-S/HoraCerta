document.getElementById('searches').addEventListener('keyup', () => {
    let input, filter, contentDiv, blocks, txtValue;
    input = document.getElementById('searches');
    filter = input.value.toUpperCase();
    contentDiv = document.getElementById("contentDiv");
    blocks = contentDiv.getElementsByTagName('a');
  
    for (let i = 0; i < blocks.length; i++) {
    let search1 = blocks[i].getAttribute('search');
    let search2 = blocks[i].getAttribute('search2');
    let searchFull = blocks[i].getAttribute('searchFull');
      if (search1.toUpperCase().indexOf(filter) > -1 || search2.toUpperCase().indexOf(filter) > -1 || searchFull.toUpperCase().indexOf(filter) > -1 ) {
        blocks[i].style.display = "";
      } else {
        blocks[i].style.display = "none";
      }
      
    }
  })