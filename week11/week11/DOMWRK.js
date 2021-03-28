
                function addItem() {
                var li = document.createElement("li");
                var inputValue = document.getElementById("inputFromUser").value;
                var t = document.createTextNode(inputValue);
                li.appendChild(t);
                
                if (inputValue === '') {
                  alert("You gotta type something bro.");
                } else {
                  document.getElementById("unorderedList").appendChild(li);
                }
                document.getElementById("inputFromUser").value = "";
              }

            var list = document.querySelector('ul');
            list.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
             }
            }, false);

              function clearList() {
                
                var ul = document.getElementById("unorderedList");
                while(ul.firstChild) ul.removeChild(ul.firstChild);

            
              }