const supported_langs = ['da', 'en', 'sv']

function valid_url_for_lang(url, lang) {    
    if(lang === 'da'){
        const result = supported_langs.some(language => url.startsWith(`/${language}/`))
        
        if(result === true) {
            return false
        } 
        
        return true
    }

    else if(url.startsWith(`/${lang}/`)){
        return true
    }

    return false
}

module.exports = {
    str_replace: (text, search_keyword, new_keyword) => {        
        if(typeof text === 'string'){
            return text.replace(search_keyword, new_keyword)
        }
        return text
    },
    urlLanguageFilter: ( items, lang ) => {
        if(items === undefined){
            return items
        }
        const filtered_urls = []
        for(const item of items) {
            if(valid_url_for_lang(item.url, lang)){
                filtered_urls.push(item)
            }
        }
        return filtered_urls
    },
    postListUrlLanguageFilter: (items, lang) => {
        if(items === undefined){
            return items
        }
        const filtered_urls = []
        for(const item of items) {
            if(valid_url_for_lang(item.page.url, lang)){
                filtered_urls.push(item)
            }
        }
        return filtered_urls        
    }
}