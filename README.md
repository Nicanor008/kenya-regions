# kenya-regions
A simple function to retrieve different data attributes of kenya regions like:
- Counties
- Sub Counties
- Constituencies
- Wards

## Usage 
### Using `async`
```
import { GetCounties } from 'kenya-regions'

const kenyaCounties = async () => {
  return await GetCounties()
}
```

### Using Promises
```
import { GetCounties } from 'kenya-regions'

GetCounties.then((counties) => return counties)
```

### What you'll get from GetCounties function
The following are the attributes of each Kenyan county
- county name
- county code
- county capital city
- The sub counties in the county
- The wards in each sub county
- The area dimensions in square km
- Population census as of 2009 and 2019
- The former province name

## Todo
#### In Progress
- Host the API backend on a reliable environment
- Populating all 47 counties with the correct data

#### Future
- Add types for typescript use cases
- Support any programming language, not only JS

## Tools
- JavaScript
- Node.js v12 and above

## Contributors
<a href="https://github.com/Nicanor008/kenya-regions/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nicanor008/kenya-regions" />
</a>

## Contributing
- **Fork** this repo
- Clone the forked repo on your github profile
- Install necessary dependencies
- Work on your changes and push to your origin
- Create a PR to the upstream repo(this repo)

## License
Copyright (c) 2022 Nicanor Korir

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
