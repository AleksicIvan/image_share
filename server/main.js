import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Images } from '../lib/collection.js'
 
console.log(Images.find().count());

Meteor.startup(() => {
  // code to run on server at startup
  if (Images.find().count() === 0) {
	for (var i = 1; i < 23; i++) {
	  Images.insert(
	    {
	        img_src: 'img_' + i + '.jpg',
	        img_alt: 'image number' + i
	    }
	  );
	}// end of for insert images
}//end of if check	

});
