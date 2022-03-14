(function(){


    var data = [
        {
            name: 'emmet',
            description: 'Emmet is the number one code snippet tool',
            author: 'emmetio',
            url: 'https://atom.io/packages/emmet',
            downloads: 4761965,
            stars: 2927,
            price: 0,
            selector: 'p1'
        },
        {
            name: 'atom-beautify',
            description: 'beautify your code',
            author: 'Glavin001',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 9134431,
            stars: 5492,
            price:0,
            selector: 'p2'
        }
    ];

    function Package(data)  {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            console.log(this.downloads, this);
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function ()    {
            return this.downloads.toLocaleString();
        };
    }

    var getTodaysDate = function()  {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id)    {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package)    {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = 'Author: ' + package.author;
        downloadEl.textContent = 'Downloads: ' + package.getFormattedDownloads();
        starsEl.textContent = 'Stars: ' + package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);
}());