// COMMON_SUB(FOCUS)
const highlight = document.getElementById('focus');
const back = document.getElementById('wrap_sub');

const handleMouseMove = (e) => {
    highlight.style.left = `${e.pageX}px`;
    highlight.style.top = `${e.pageY}px`;
};


// COMMON_SUB(CLICK EVENT)
const objectClick = document.querySelectorAll('.obj_1, .obj_2, .obj_3, .obj_4, .obj_5, .obj_6, .obj_7, .obj_8, .obj_9');

    objectClick.forEach(event => {
            event.addEventListener('click', (click) => {
                document.removeEventListener('mousemove', handleMouseMove);
                back.classList.remove('filter');
                highlight.style.display= 'none';

                if (!click.target.classList.contains('obj_7')) {
                  click.target.style.display = 'none';
                }

                if (event.classList.contains('obj_1')) {
                    back.style.background = '#FDC98E';
                    objects1.forEach(e => {
                      e.style.display = 'block'
                    })
                }

                else if (event.classList.contains('obj_2')) {
                    back.style.background = '#F8A2F5';
                    objects2.forEach(e => {
                      e.style.display = 'block'
                    })
                    sinking();
                }

                else if (event.classList.contains('obj_3')) {
                  back.style.background = '#907ED6';
                  objects3.forEach(e => {
                    e.style.display = 'block'
                  })   
                }

                else if (event.classList.contains('obj_4')) {
                  event.style.display = 'block';
                }

                if (event.classList.contains('obj_5')) {
                  back.style.background = '#5699E1';
                  objects5.forEach (e => {
                    e.style.display = 'block'
                  })
                }

                else if (event.classList.contains('obj_6')) {
                  back.style.background = '#97BC9A';
                  object6A.style.display = 'block';
                  object6B.style.display = 'block';
                }

                else if (event.classList.contains('obj_7')) {
                  back.style.background = '#9F6BD8';
                  craken.style.top = '20%';
                  sea1.style.top = '70%';
                  sea2.style.top = '58%';
                  objects7.forEach(e => {
                    e.classList.add('change')
                  })
                }

                else if (event.classList.contains('obj_8')) {
                  back.style.background = '#FBCDE6';
                  object8A.style.display = 'block';
                }

                else if (event.classList.contains('obj_9')) {
                  object9A.style.display = 'block';
                  object9B.style.display = 'block';
                }
            })
    });

document.addEventListener('mousemove', handleMouseMove);


// SUB_1 MANGEMENT //
const objects1 = document.querySelectorAll('.obj_1a, .shadow, #guide');
const object1A = document.querySelector('.obj_1a');
const object1B = document.querySelector('.obj_1b');
const object1C = document.querySelector('.obj_1c');
const shadow = document.querySelector('.shadow');
const guide = document.getElementById('guide');

let eggCount = 0;


objects1.forEach(event => {
    
    if (event.classList.contains('obj_1a')) {

        event.addEventListener('click', () => {
            eggCount += 1;

            if (eggCount >= 1 && eggCount <= 4 ) {
            event.classList.add('vibration_ani');
            shadow.style.animation = 'none';

            setTimeout(() => {
                event.classList.remove('vibration_ani');
                shadow.style.animation = 'shadow .5s ease-in-out alternate infinite';
                }, 300);
            }

            else if (eggCount >= 5) {
            object1B.classList.add('vibration_ani');
            object1B.style.opacity = '1';
            object1A.style.display = 'none';
            shadow.style.animation = 'none';
            guide.style.display = 'none';
            object1C.style.opacity = '1';
            object1C.classList.add('nimo_ani');
            }
            console.log(eggCount);
        })

        console.log("success!!");
        }

});


// SUB_2 MANGEMENT //
const objects2 = document.querySelectorAll('.obj_2a, .obj_2b, .obj_2c, .obj_2d');

let pos = 0;
let sink = true; 

function sinking() {
  if (sink) {
    pos += 20;
    objects2.forEach(event => {
        event.style.transform = `translateY(${pos}px)`;
      })
    requestAnimationFrame(sinking);
    if (pos > window.innerHeight - 500) {
      pos = window.innerHeight - 500;
    }
  }
}

function rising() {
  pos -= 2; 
  objects2.forEach(event => {
    event.style.transform = `translateY(${pos}px)`;
  })  
  if (pos < 0) {
    pos = 0;
  }
  if (pos > 0) {
    requestAnimationFrame(rising);
  }
}

objects2.forEach(event => {
  event.addEventListener('mouseover', () => {
    sink = false; 
    cancelAnimationFrame(sinking);
    rising();
  });
})

objects2.forEach(event => {
  event.addEventListener('mouseleave', () => {
    sink = true;
    sinking();
  });
})


// SUB_3 MANGEMENT //
const objects3 = document.querySelectorAll('.obj_3a, .obj_3b, .obj_3c');
const object3A = document.querySelector('.obj_3a');
const object3B = document.querySelector('.obj_3b');
const object3C = document.querySelector('.obj_3c');
const object3D = document.querySelector('.obj_3d');

if (object3A) {
  object3B.addEventListener('dragover', (e)=> {
    e.preventDefault();
  })
  object3B.addEventListener('drop', (e)=> {
    e.preventDefault();
    object3A.style.display = 'none';
    object3C.style.display = 'none';
    object3B.classList.add('change');
    object3D.style.display = 'block';
  })
}


// SUB_4 MANGEMENT //
const object4 = document.querySelectorAll('.obj_4');
const objects4 = document.querySelectorAll('.j0, .j1, .j2, .j3, .j4, .j5, .j6, .j7, .j8, .j9, .j10');
const object4E = document.querySelector('.obj_4e');

let special = 0


objects4.forEach(event => {
  event.addEventListener('click', () => {
    if (event.classList.contains('j7')) {
      special += 1
      console.log('easter egg!!');
      console.log(special);
    }
    if (special > 5) {
      object4.forEach(event => {
        event.style.transform = 'translateY(-500%)';
        object4E.style.display = 'block';
        console.log('success!!');
      })
    }
  })
});


// SUB_5 MANGEMENT //
const objects5 = document.querySelectorAll('.obj_5a, .obj_5b, .obj_5c, .opacity');
const object5A = document.querySelector('.obj_5a');
const opacity = document.querySelector('.opacity');
 

if (object5A) { {
  opacity.addEventListener('input', function() {
    object5A.style.opacity = `${opacity.value}%`;;
  })
}
}

  // SUB_6 MANGEMENT //
  const object6A = document.querySelector('.obj_6a');
  const object6B = document.querySelector('.obj_6b');

  let mouthCount = 0

  if (object6A) {
    object6A.addEventListener('dragstart', (e) => {
      e.preventDefault();
      object6A.classList.add('body_ani');
      object6B.classList.add('mouth_ani');

      if (mouthCount === 3) {
        object6A.style.background = "url(./img/shark_cry.svg) no-repeat";
      };

      setTimeout(() => {
        object6A.classList.remove('body_ani');
        object6B.classList.remove('mouth_ani');
        mouthCount += 1
        }, 3000);

      console.log('success!!');
      console.log(mouthCount);
    });
  }
    

  // SUB_7 MANGEMENT //
  const objects7 = document.querySelectorAll('.c0, .c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .s1, .s2');
  const craken = document.querySelector('.c0');
  const sea1 = document.querySelector('.s1');
  const sea2 = document.querySelector('.s2');
  

  // SUB_8 MANGEMENT //
  const object8A  = document.querySelector('.obj_8a');
  const object8B  = document.querySelector('.obj_8b');

  let scaleNum = 1.8;
  let bottomNum = 0;

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      
      if (scaleNum > 0.5) {
        scaleNum -= 0.1;
        bottomNum += 30;
        object8A.style.transform = `scale(${scaleNum}) translateY(${bottomNum}px)`;
        console.log('arrowdown!!');
      }

      else if (scaleNum <= 0.5) {
        object8A.style.background = "url(./img/blobfish_end.png) no-repeat";
        object8B.style.opacity = '1';
        console.log('success!!');
      }
    }
  })


  // SUB_9 MANGEMENT //
  const object9A  = document.querySelector('.obj_9a');
  const object9B  = document.querySelector('.obj_9b');
  let lightCount = 0;

  if(object9A) {
    object9A.addEventListener('click', () => {
      lightCount += 1;
      console.log('click');
      if (lightCount === 1) {
        object9B.style.backgroundColor = '#544e1f';
        object9B.style.boxShadow = '0 0 30px #878149';
        object9B.style.filter = 'drop-shadow(0 0 5px rgba(244, 228, 58, 0.8))';
      }
  
      else if (lightCount === 2) {
        object9B.style.backgroundColor = '#878149';
        object9B.style.boxShadow = '0 0 50px #afa979';
        object9B.style.filter = 'drop-shadow(0 0 8px rgba(244, 228, 58, 0.8))';
      }
  
      else if (lightCount === 3) {
        object9B.style.backgroundColor = '#afa979';
        object9B.style.boxShadow = '0 0 100px #cecbad';
        object9B.style.filter = 'drop-shadow(0 0 13px rgba(244, 228, 58, 0.8))';
      }
  
      else if (lightCount === 4) {
        object9B.style.backgroundColor = '#cecbad';
        object9B.style.boxShadow = '0 0 200px #edebdd';
        object9B.style.filter = 'drop-shadow(0 0 15px rgba(244, 228, 58, 0.8))';
      }
  
      else if (lightCount === 5) {
        object9B.style.backgroundColor = '#edebdd';
        object9B.style.boxShadow = '0 0 500px #eeece1';
        object9B.style.filter = 'drop-shadow(0 0 15px rgba(244, 228, 58, 0.8))';
      }
    });
  }