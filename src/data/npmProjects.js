export default class NpmProjects {

    static projects = [
        {
            name: 'json-2-csv',
            description: 'I wrote a node module that can convert JSON documents into CSV as well as CSV back to an array of JSON documents. I was inspired to write this due to a project requirement at MITRE that I could not find a good solution for. One of the key features that we needed was to be able to convert JSON documents that had nested documents. Existing modules did not support that functionality, and I wanted to avoid changing our data schema. In my spare time, I developed this module which allows us to easily convert our existing schema into a nicely formatted CSV output. I am hoping to continue to add more functionality to this module and possibly create additional node modules in the future.'
        },
        {
            name: 'tag-cloud',
            description: 'I wrote a node module that can generate the necessary HTML to create tag clouds which have become increasingly popular. At the time of creation, there were very few other modules, if any, that provide the same functionality and even fewer which provide the same options. I developed this module after work in order to fulfill a need for a project I was working on during my third Co-op.'
        },
        {
            name: 'memo-cache',
            description: 'After hearing and experiencing some of the pain points of the current caching modules for NodeJS, I decided to create my own. This module combines both caching and memoization into one module, which is surprisingly rare considering memoization relies heavily on a caching implementation. When programming this, I decided to complete the caching library first, which would allow me to base my memoization functionality off of the caching library that I implemented. This library also implements a least recently used (LRU) algorithm and allows for multiple \'named\' caches inside the same module.'
        },
        {
            name: 'doc-path',
            description: 'I abstracted this part of my json-2-csv module out and eventually decided to spin it off as a separate node module since it was something that I found I was re-writing multiple times.'
        },
        {
            name: 'updep',
            description: 'As the sole maintainer of multiple Node modules, it is rather time consuming to manually update the package dependencies for each module. In order to automate it, I created this module which contains a script that can manually update all of the dependencies for a package to the latest version.'
        },
        {
            name: 'objecdiff',
            description: 'This module was designed to provide the ability to identify and process differences between two objects. This is useful not only for testing, but also for identifying when specific attributes of a document change, such as during a nightly load script.'
        },
        {
            name: 'htpasswd-mgr',
            description: 'In order to automate the process of managing users for the Admin portion of the signaturelimocompany.com website project, I created this node module which allows for the programmatic manipulation of an .htpasswd file.'
        },
        {
            name: 'deeks',
            description: 'This module also contains functionality which originally was part of the json-2-csv module, but was abstracted out in order to provide the same functionality for other modules. Specifically, it generates a list of keys from a single document or a list of documents.'
        }
    ];
}
