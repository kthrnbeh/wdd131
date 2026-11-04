const Character = {
  name: 'SNORLEBLAT',
  species: 'Monster',
  class: 'Swamp Beast Diplomat',
  level: "",
  health: 100
};

    {
      sectionNum: 1,
      roomNum: 'STC 353',
      enrolled: 26,
      days: 'TTh',
      instructor: 'Bro T'
    },
    {
      sectionNum: 2,
      roomNum: 'STC 347',
      enrolled: 28,
      days: 'TTh',
      instructor: 'Sis A'
    }
  ],        

  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  }
};

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`;
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector('#sections').innerHTML = html.join('');
}

document.querySelector('#courseName').textContent = aCourse.name;
document.querySelector('#courseCode').textContent = aCourse.code;

const courseImage = document.querySelector('img');
courseImage.setAttribute('src', aCourse.logo);
courseImage.setAttribute('alt', aCourse.name);
courseImage.style.width = '100px';

renderSections(aCourse.sections);

document.querySelector('#enrollStudent').addEventListener('click', () => {
  const sectionNum = document.querySelector('#sectionNumber').value;
  aCourse.enrollStudent(sectionNum);
});
