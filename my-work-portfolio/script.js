
function toggleBio() {
    var bio = document.getElementById("bio");
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
    } else {
        bio.style.display = "none";
    }
}

function updatePortfolio(folderName) {
    for (let i = 1; i <= 20; i++) {
        let imgElement = document.getElementById('image' + i).getElementsByTagName('img')[0];
        imgElement.src = folderName + '/job' + i + '.png';
        

        let container = document.getElementById('image' + i);
        container.getElementsByTagName('h2')[0].textContent = folderName + i;
        container.getElementsByTagName('p')[0].textContent = '' + i;
    }
}

// 页面加载时调用这个函数来初始化显示的作品集
window.onload = function() {
    updatePortfolio('空间陈列设计'); // 只需更改这里的类别名称即可
};
