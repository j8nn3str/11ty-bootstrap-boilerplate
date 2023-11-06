const yaml = require("js-yaml");
const dayjs = require("dayjs")
module.exports = function (eleventyConfig) {
    eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
    eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents))
    eleventyConfig.addDataExtension('yml', contents => yaml.load(contents))
    eleventyConfig.addFilter('formatDate', function(date,format){
        return dayjs(date).format(format)
    });

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    };
}