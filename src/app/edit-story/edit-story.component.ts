import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Content } from '../model/Content';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  story: any;
  storyName: any;
  isMe: boolean= false;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // if (localStorage.getItem('userId')=='62e348924d52fa7420bb96bc') {
      this.isMe = true;

      this.story = {
        "posts": [],
        "_id": "62e70ba0e773003bf0c47747",
        "title": "The Hong Kong Protests",
        "subtitle": "and the English Colonial Legacy of Resisting Authority",
        "name": "hong-kong",
        "contents": [
            {
                "_id": "62e70ba0e773003bf0c47748",
                "type": "image",
                "text": "Upwards of a million people protesting the eventual Chinese takeover of Hong Kong.",
                "url": "https://i.imgur.com/IrbVV5t.jpg"
            },
            {
                "_id": "62e70ba0e773003bf0c47749",
                "type": "text",
                "text": "The nation has been consumed by an opioid epidemic. Addicts overwhelm drug dens and spill into the streets. Overdoses have reached unprecedented levels. Whether for the goodwill of the people of the sharp decline in workforce, the government is cracking down swiftly. Bonfires of seized contraband billow smoke into the night sky. Houses are raided while dealers and junkies alike are rounded up and incarcerated en masse. The government has taken near Draconian measures to win its war on drugs, but this isn’t modern America, this is 1840s China, and the pushers aren’t illegal cartels, but the largest “civilizing” force the world has ever seen: The British Empire.",
                "url": ""
            },
            {
                "_id": "62e70ba0e773003bf0c4774a",
                "type": "image",
                "text": "A massive opium stash.",
                "url": "https://i.imgur.com/mKchkXm.jpg"
            },
            {
                "_id": "62e70ba0e773003bf0c4774b",
                "type": "text",
                "text": "The man appointed by the Chinese Emperor to put an end to the drug craze was the incorruptible Lin Zexu. Seeing the devastating effects of widespread addiction, Zexu began a no tolerance campaign in the epicenter of the crisis, the port town of Canton. There, he forced addicts into rehab, burned millions’ worth of illegal substances, and executed dealers and corrupt officials alike. There was however one huge obstacle, The largest Empire ever, Great Britain.",
                "url": ""
            },
            {
                "_id": "62e70ba0e773003bf0c4774c",
                "type": "image",
                "text": "A group of opium addicts get lit.",
                "url": "https://i.imgur.com/6qpaj1f.jpg"
            },
            {
                "_id": "62e70ba0e773003bf0c4774d",
                "type": "text",
                "text": "The English were hooked on their own slightly less addictive substance, tea, and only China had their fix. Isolationist China would only accept silver for tea and Britain was recently cut off from South American supplies of the precious metal. With a gigantic debt, a steady supply of opium, and a consumer base just out of reach, the East India Company resorted to exchanging opium for tea via underground methods. Until Lin Zexu in his crusade seized and burned 1,400 tons of opium in a British storehouse. It was at this point that the British Empire, which prided itself on bringing morality and honor to the far-flung barbarians of the uncivilized world, decided to put profit above principle and conclude that the right to sell the most devastatingly addictive drug to the detriment of society was worth going to war for. Having been driven from Canton, the British were forced to set up operations on a small barren island which came to be known as Hong Kong.",
                "url": ""
            },
            {
                "_id": "62e70ba0e773003bf0c4774e",
                "type": "image",
                "text": "A battle between Chinese and British naval forces in the South China Sea.",
                "url": "https://i.imgur.com/jjEQfIw.jpg"
            },
            {
                "_id": "62e70ba0e773003bf0c4774f",
                "type": "text",
                "text": "Utterly outgunned by the more advanced technology of the British, China suffered a debilitating loss in the Opium Wars. Britain forced China to legalize the drug and addiction was free to ravage the populace unfettered. Britain also kept Hong Kong to serve as a foothold in the region for British interests. Britain at the time controlled the most land of any Empire ever. In every place it colonized, however, the British Empire sowed the seeds of its own demise. The English language carries with it an inherent disdain for authority.",
                "url": ""
            },
            {
                "_id": "62e70ba0e773003bf0c47750",
                "type": "image",
                "text": "Upwards of a million people protesting the eventual Chinese takeover of Hong Kong.",
                "url": "https://i.imgur.com/6L6tOC5.jpg"
            },
            {
                "_id": "62e70ba0e773003bf0c47751",
                "type": "text",
                "text": "What is your opinion of the government and politicians? Let me guess … you don’t like them. You’re not being edgy or fresh, you’re merely the latest instance of a centuries’ old tradition of anti-establishment ideas built into this language. The English killed their king a hundred years before the French Revolution made it cool. The Magna Carta recognized the dangers of tyranny while monarchy in the rest of Europe was at its height. The Enlightenment of the 18th century brought human rights and individualism to the forefront of thought all while the empire itself was subjugating and exploiting foriegn lands, people, and resources. Starting with America, all of Britain’s holdings one by one became educated enough in English to point out the empire’s hypocrisy. Gandhi studied law in London and implemented the enlightened, people first philosophy well enough to cause the British to throw up their hands and give up the entire subcontinent of India.",
                "url": ""
            },
            {
                "_id": "62e70ba0e773003bf0c47752",
                "type": "image",
                "text": "More protesters express discontent.",
                "url": "https://i.imgur.com/mKVshB6.jpg"
            },
            {
                "_id": "62e70ba0e773003bf0c47753",
                "type": "text",
                "text": "In 1949, Britain made a hundred year plan to transition control of Hong Kong from Britain to China. In 1998, Hong Kong gained independence but in 2048 Hong Kong is expected to come under the control of China. In 1948, the Chinese annexation of Hong Kong seemed like a distant dream, but now the fast-approaching date of 2048 looms large on the psyche of the people of Hong Kong. With the English legacy of anti-authoritarianism, an increase of westernization in Hong Kong, and an authoritative Chinese regime, the people of Hong Kong are becoming increasingly anxious of the freedoms they might lose when China takes over and they have taken to the streets to secure their own future while they still can. We’ve seen first hand how modern China handles uprisings with the Tiananmen Square massacre. The protests in Hong Kong are about much more than the fate of a city-state, it is a reflection of the global on-going struggle between individualism and authority.",
                "url": ""
            },
            {
                "_id": "632527f52639713468d89d2b",
                "type": "",
                "text": "",
                "url": ""
            }
        ],
        "createdAt": "2022-07-31T23:09:20.965Z",
        "__v": 0
    }

    // }

    // this.storyName = this.route.snapshot.paramMap.get('storyName');
    // var url = 'http://localhost:3002/api/stories/' + this.storyName;
    // this.httpClient.get(url).subscribe(data => {
    //   this.story = data;
    // })
  }

  editStory() {
    console.log(this.story);
    var url = "http://localhost:3002/api/stories/" + this.story._id;
    this.httpClient.put(url, this.story)
    .subscribe(response => console.log(response));
  }

  addContent() {
    var newContent = new Content("", "", "");
    this.story.contents.push(newContent);
  }
}
