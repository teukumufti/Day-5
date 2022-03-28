// let namaSiswa = ['apis', 'kamila', 'indah', 'lala']
// console.log(namaSiswa)

// let tambahData = namaSiswa.push('sem', 'dila') //menambah data
// console.log('tambah namaSiswa :',namaSiswa)

// let reverseData = namaSiswa.reverse() // reverse data
// console.log('reverse data :', reverseData)

// let sortData = namaSiswa.sort() // mengurutkan data
// console.log('sort data :', sortData)

// const numbers = [30, 40, 70]
// function dataNumbers(total, numb) {             //reduce data
//     return total + numb
// }
// let result = numbers.reduce(dataNumbers)
// console.log(result)

//add blog
// let dataSiswa = []
// console.log(dataSiswa)

// function tambahSiswa () {
//     let name = document.getElementById('input-name').value
//     let content = document.getElementById('input-email').value
// image = URL.createObjectURL(image[0]) //untuk mengambil gambar

//     let siswa = {
//         name: name,
//         content: content,
//     }
//     dataSiswa.push(siswa)
//     console.log(dataSiswa)
// }

// --------------------------------------------------------------------------------------------------

let projects = [];
function addProject(event) {
  event.preventDefault(event);

  let name = document.getElementById("input-nameProject").value;
  let startDate = document.getElementById("input-startDate").value;
  let endDate = document.getElementById("input-endDate").value;
  //   let technologies = document.getElementById("technology").innerHTML;
  let description = document.getElementById("input-description").value;
  let uploadImage = document.getElementById("input-image").files;
  //icons
  let nodeJs = document.getElementById("input-node").checked;
  let javascript = document.getElementById("input-javascript").checked;
  let reactJs = document.getElementById("input-react").checked;
  let vueJs = document.getElementById("input-vuejs").checked;

  if (nodeJs) {
    nodeJs = document.getElementById("input-node").value;
  } else {
    nodeJs = "";
  }
  if (javascript) {
    javascript = document.getElementById("input-javascript").value;
  } else {
    javascript = "";
  }
  if (reactJs) {
    reactJs = document.getElementById("input-react").value;
  } else {
    reactJs = "";
  }
  if (vueJs) {
    vueJs = document.getElementById("input-vuejs").value;
  } else {
    vueJs = "";
  }

  uploadImage = URL.createObjectURL(uploadImage[0]);

  let project = {
    name: name,
    startDate: startDate,
    endDate: endDate,
    // technologies: technologies,
    description: description,
    uploadImage: uploadImage,
    postAt: new Date(),
    author: "Teuku Mufti",
    //icons
    nodeJs: nodeJs,
    javascript: javascript,
    reactJs: reactJs,
    vueJs: vueJs,
  };
  projects.push(project);
  console.log(projects);

  renderProject();
}

function renderProject() {
  // document.getElementById("box-projects").innerHTML = "";
  for (let dataProject = 0; dataProject < projects.length; dataProject++) {
    document.getElementById("box-projects").innerHTML += `
    <div style="width: 265px; margin-left: 40px">
          <div style="margin-top: 30%">
            <div class="blog-detail">
              <div>
                <img
                  src="${projects[dataProject].uploadImage}"
                  class="style-imageBlogDetail"
                  alt="image phone"
                />
              </div>
              <div>
                <div>
                  <h3>${projects[dataProject].name}</h3>
                  <p style="color: gray; margin-bottom: 10px">${getFullTime(
                    new Date()
                  )}</p>
                </div>
                <div>
                  <p>
                  ${projects[dataProject].description}
                  </p>
                  <a
                    href="../myProjeect/blogdetail.html"
                    style="color: rgb(152, 155, 95); text-decoration: none"
                    ><p
                      style="
                        font-size: 13px;
                        margin-bottom: 17px;
                        margin-top: 10px;
                      "
                    >
                      click here for detail
                    </p></a
                  >
                  <div>
                    <span style="margin-left: 200px; color: gray; font-size:10px">${getDistanceTime(
                      new Date()
                    )}</span>
                  </div>
                </div>
              </div>
              
              <div class="style-icons">
              <div>
                <i class='${projects[dataProject].nodeJs}'></i>
              </div>
              <div>
                <i class='${projects[dataProject].javascript}'></i></i>
              </div>
              <div>
                <i class='${projects[dataProject].reactJs}' ></i>
              </div>
              <div>
                <i class='${projects[dataProject].vueJs}' ></i>
              </div>
            </div>
              <div class="style-buttonBlogDetails">
                <div>
                  <button class="style-buttonEdit">edit</button>
                </div>
                <div>
                  <button class="style-buttonDelete">delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

// ---------------------------------------------------------------------------------------------

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "Oktober",
  "November",
  "Desember",
];
function getFullTime() {
  let time = new Date();
  let date = time.getDate();
  console.log(date);

  let monthIndex = time.getMonth();
  console.log(month[monthIndex]);

  let years = time.getFullYear();
  console.log(years);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  let fullTime = `${date} ${month[monthIndex]} ${years} ${hours}:${minutes}`;

  return fullTime;
}

getFullTime();

// // --------------------------------------------------------------------------------------

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;
  console.log(timePost);

  let distance = timeNow - timePost;
  console.log(distance);

  let milliSecond = 1000;
  let secondInHours = 3600;
  let hoursInDay = 24;

  let distanceDay = Math.floor(
    distance / (milliSecond * secondInHours * hoursInDay)
  );
  let distanceHours = Math.floor(distance / (milliSecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milliSecond * 60));
  let distanceSecond = Math.floor(distance / milliSecond);

  console.log(distanceDay, "day ago");
  console.log(distanceHours, "hours ago");
  console.log(distanceMinutes, "minute ago");
  console.log(distanceSecond, "second ago");

  if (distanceDay >= 1) {
    return `${distanceDay} day ago`;
  } else if (distanceHours >= 1) {
    return `${distanceHours} hours ago`;
  } else if (distanceMinutes >= 1) {
    return `${distanceMinutes} minutes ago`;
  } else {
    return `${distanceSecond} second ago`;
  }
}

// setInterval(() => {
//   renderProject();
// }, 3000);
