## File changes.

Changed the `AnimalProfile.aspx` file for redesigning the AnimalProfile page and Added Files `ThankYou.aspx`, `ThankYou.aspx.cs` and `ThankYou.aspx.designer.cs` for designing the ThankYou page.

### `AnimalProfile.aspx`

In this file I have divided the whole body into **two sections** the **left section** will contain the main content and image with description same as before but with some visual changes and improvements. In the **right section** there is a **card** which shows the overall progress of the donation, also it will show the tags used in the description/story of the animal. The card also have some placeholder text for the **donors**. Added missing functionality to the **share button**. Now the share button supports multiple options including copying the link. In the mobile view a bottom bar appears on the screen instead of the card which works same as the card. The Modal Form in the AnimalProfile page is same as before it is not modified. The default **progress bar** is changed keeping the functionality intact.

> The AnimalProfile file contains a dummy image which can be replaced the code is at line 423 to 425

```html
<div class="image-frame" style="align-self:center;">
  <img
    src="https://www.hindustantimes.com/ht-img/img/2023/08/25/1600x900/international_dog_day_1692974397743_1692974414085.jpg"
    alt="dog-image"
  />
</div>
```

### `ThankYou.aspx`

ThankYou page is a simple page with Text on the Screen and an Image as a background. It have two animal images in the bottom that I have added in the `AT-Karma/Images` folder with names `cat-cp.png` for cat image and `dog-cp.png` for dog image and `bg.png` for background image.
