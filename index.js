const file = document.querySelector('#fileInput')

file.addEventListener('change', handleFileSelect)

function handleFileSelect(event){
    const files = event.target.files;
    document.getElementById('colorsContainer').innerHTML = ""
    
    Array.from(files).forEach(file => {
         const reader = new FileReader();
         reader.onload = function(e) {
              const img = new Image();
             img.src = e.target.result;
             img.onload = function() {
                const colorThief = new ColorThief();
                const colors = colorThief.getPalette(img, 10);
                
                colors.forEach(color => {
                    const colorBlock = document.createElement('div');
                    colorBlock.className = 'color-block';
                    colorBlock.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                    colorsContainer.appendChild(colorBlock);
                })
             }
         }
         reader.readAsDataURL(file)
    })

}