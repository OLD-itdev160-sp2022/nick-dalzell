(function(){


    var data = [
        {
            name: 'emmet',
            description: 'Emmet is the number one code snippet tool',
            author: 'emmetio',
            url: 'https://atom.io/packages/emmet',
            downloads: 20000000,
            stars: 4000,
            price: 50.50,
            selector: 'p1'
        },
        {
            name: 'atom-beautify',
            description: 'added later',
            author: 'Glavin001',
            url: 'https://atom.io/packages/atom-beautify',
            downloads:500000,
            stars:5000,
            price:6.75,
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
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);
}());