// console.log('coucou');
const navigation = document.querySelector('nav');
// console.log(navigation);




navigation.innerHTML += `
<h1>Wild Face</h1>

<ul class="logo-svg">
    <li>
        <svg width="30" height="27" viewBox="0 0 37 32" fill="none">
            <path d="M16.5269 15.9417C18.1485 15.9417 19.6802 15.4735 20.8992 14.6217L26.8245 19.4605C26.9342 19.5503 27.0788 19.5952 27.2228 19.5952C27.3662 19.5952 27.5102 19.5507 27.6199 19.4614C27.8399 19.2827 27.8404 18.9927 27.621 18.8135L21.6906 13.9711C23.9108 11.8113 23.7814 8.57706 21.294 6.54644C20.0205 5.50639 18.3274 4.93367 16.5263 4.93367C14.7252 4.93367 13.032 5.50639 11.7585 6.54644C9.1311 8.69206 9.1311 12.1838 11.7585 14.3294C13.0326 15.369 14.7257 15.9417 16.5269 15.9417ZM12.5556 7.19338C13.6165 6.32698 15.0267 5.85002 16.5269 5.85002C18.027 5.85002 19.4372 6.32698 20.4981 7.19338C22.689 8.98254 22.689 11.8933 20.4981 13.6825C19.4372 14.5489 18.027 15.0258 16.5269 15.0258C15.0267 15.0258 13.6165 14.5489 12.5556 13.6825C10.3652 11.8933 10.3652 8.98254 12.5556 7.19338Z" fill="#231F20" stroke="black" stroke-width="1.92"/>
        </svg>
    </li>
    
    <li>
        <svg width="30" height="27" viewBox="0 0 28 24" fill="none">
            <path d="M14.2574 12.6891C13.4245 12.6891 12.6103 12.4792 11.9177 12.0858C11.2251 11.6926 10.6853 11.1335 10.3666 10.4794C10.0479 9.82535 9.96444 9.10564 10.1269 8.41129C10.2894 7.71694 10.6905 7.07914 11.2795 6.57854C11.8685 6.07794 12.6189 5.73703 13.4358 5.59892C14.2527 5.4608 15.0995 5.53168 15.8691 5.80261C16.6386 6.07353 17.2964 6.53232 17.7591 7.12096C18.2219 7.70961 18.4689 8.40166 18.4689 9.10961C18.4689 10.0589 18.0252 10.9694 17.2354 11.6407C16.4456 12.3119 15.3744 12.6891 14.2574 12.6891ZM14.2574 6.96193C13.7577 6.96193 13.2692 7.08789 12.8536 7.32387C12.4381 7.55987 12.1142 7.89529 11.9229 8.28772C11.7317 8.68017 11.6816 9.112 11.7791 9.5286C11.8766 9.94521 12.1173 10.3279 12.4707 10.6283C12.8241 10.9286 13.2743 11.1332 13.7644 11.2161C14.2546 11.2989 14.7627 11.2563 15.2244 11.0938C15.6862 10.9312 16.0808 10.6559 16.3584 10.3028C16.6361 9.94961 16.7843 9.53438 16.7843 9.10961C16.7843 8.54001 16.518 7.99374 16.0442 7.59097C15.5703 7.1882 14.9276 6.96193 14.2574 6.96193Z" fill="black"/>
            <path d="M22.1188 19.3708C21.8963 19.3683 21.6837 19.2921 21.5264 19.1584C21.369 19.0247 21.2794 18.844 21.2765 18.6549C21.2765 16.7935 20.0861 15.5527 14.2574 15.5527C8.42883 15.5527 7.2384 16.7935 7.2384 18.6549C7.2384 18.8447 7.14966 19.0268 6.9917 19.1611C6.83375 19.2954 6.6195 19.3708 6.39612 19.3708C6.17273 19.3708 5.95849 19.2954 5.80053 19.1611C5.64258 19.0268 5.55383 18.8447 5.55383 18.6549C5.55383 14.1209 11.652 14.1209 14.2574 14.1209C16.8629 14.1209 22.9611 14.1209 22.9611 18.6549C22.9581 18.844 22.8685 19.0247 22.7112 19.1584C22.5538 19.2921 22.3413 19.3683 22.1188 19.3708Z" fill="black"/>
            <path d="M14.2574 12.6891C13.4245 12.6891 12.6103 12.4792 11.9177 12.0858C11.2251 11.6926 10.6853 11.1335 10.3666 10.4794C10.0479 9.82535 9.96444 9.10564 10.1269 8.41129C10.2894 7.71694 10.6905 7.07914 11.2795 6.57854C11.8685 6.07794 12.6189 5.73703 13.4358 5.59892C14.2527 5.4608 15.0995 5.53168 15.8691 5.80261C16.6386 6.07353 17.2964 6.53232 17.7591 7.12096C18.2219 7.70961 18.4689 8.40166 18.4689 9.10961C18.4689 10.0589 18.0252 10.9694 17.2354 11.6407C16.4456 12.3119 15.3744 12.6891 14.2574 12.6891ZM14.2574 6.96193C13.7577 6.96193 13.2692 7.08789 12.8536 7.32387C12.4381 7.55987 12.1142 7.89529 11.9229 8.28772C11.7317 8.68017 11.6816 9.112 11.7791 9.5286C11.8766 9.94521 12.1173 10.3279 12.4707 10.6283C12.8241 10.9286 13.2743 11.1332 13.7644 11.2161C14.2546 11.2989 14.7627 11.2563 15.2244 11.0938C15.6862 10.9312 16.0808 10.6559 16.3584 10.3028C16.6361 9.94961 16.7843 9.53438 16.7843 9.10961C16.7843 8.54001 16.518 7.99374 16.0442 7.59097C15.5703 7.1882 14.9276 6.96193 14.2574 6.96193Z" fill="black"/>
            <path d="M22.1188 19.3708C21.8963 19.3683 21.6837 19.2921 21.5264 19.1584C21.369 19.0247 21.2794 18.844 21.2765 18.6549C21.2765 16.7935 20.0861 15.5527 14.2574 15.5527C8.42883 15.5527 7.2384 16.7935 7.2384 18.6549C7.2384 18.8447 7.14966 19.0268 6.9917 19.1611C6.83375 19.2954 6.6195 19.3708 6.39612 19.3708C6.17273 19.3708 5.95849 19.2954 5.80053 19.1611C5.64258 19.0268 5.55383 18.8447 5.55383 18.6549C5.55383 14.1209 11.652 14.1209 14.2574 14.1209C16.8629 14.1209 22.9611 14.1209 22.9611 18.6549C22.9581 18.844 22.8685 19.0247 22.7112 19.1584C22.5538 19.2921 22.3413 19.3683 22.1188 19.3708Z" fill="black"/>
            <path d="M14.2574 12.6891C13.4245 12.6891 12.6103 12.4792 11.9177 12.0858C11.2251 11.6926 10.6853 11.1335 10.3666 10.4794C10.0479 9.82535 9.96444 9.10564 10.1269 8.41129C10.2894 7.71694 10.6905 7.07914 11.2795 6.57854C11.8685 6.07794 12.6189 5.73703 13.4358 5.59892C14.2527 5.4608 15.0995 5.53168 15.8691 5.80261C16.6386 6.07353 17.2964 6.53232 17.7591 7.12096C18.2219 7.70961 18.4689 8.40166 18.4689 9.10961C18.4689 10.0589 18.0252 10.9694 17.2354 11.6407C16.4456 12.3119 15.3744 12.6891 14.2574 12.6891ZM14.2574 6.96193C13.7577 6.96193 13.2692 7.08789 12.8536 7.32387C12.4381 7.55987 12.1142 7.89529 11.9229 8.28772C11.7317 8.68017 11.6816 9.112 11.7791 9.5286C11.8766 9.94521 12.1173 10.3279 12.4707 10.6283C12.8241 10.9286 13.2743 11.1332 13.7644 11.2161C14.2546 11.2989 14.7627 11.2563 15.2244 11.0938C15.6862 10.9312 16.0808 10.6559 16.3584 10.3028C16.6361 9.94961 16.7843 9.53438 16.7843 9.10961C16.7843 8.54001 16.518 7.99374 16.0442 7.59097C15.5703 7.1882 14.9276 6.96193 14.2574 6.96193Z" fill="black"/>
            <path d="M22.1188 19.3708C21.8963 19.3683 21.6837 19.2921 21.5264 19.1584C21.369 19.0247 21.2794 18.844 21.2765 18.6549C21.2765 16.7935 20.0861 15.5527 14.2574 15.5527C8.42883 15.5527 7.2384 16.7935 7.2384 18.6549C7.2384 18.8447 7.14966 19.0268 6.9917 19.1611C6.83375 19.2954 6.6195 19.3708 6.39612 19.3708C6.17273 19.3708 5.95849 19.2954 5.80053 19.1611C5.64258 19.0268 5.55383 18.8447 5.55383 18.6549C5.55383 14.1209 11.652 14.1209 14.2574 14.1209C16.8629 14.1209 22.9611 14.1209 22.9611 18.6549C22.9581 18.844 22.8685 19.0247 22.7112 19.1584C22.5538 19.2921 22.3413 19.3683 22.1188 19.3708Z" fill="black"/>
            </svg>

        </li>
    </ul>
                        `;

const svg = document.querySelectorAll('svg');
const text = `loin de moi l'idée de graver dans le marbre de tailler dans une écorce d'arbre loin de moi l'idée de suggérer que je m'en moque que je n'en ai rien à faire que guère je ne m'en soucie loin de moi ces folies mais je m'échine depuis octobre et pourquoi donc depuis début octobre même et qui m'aime me suive depuis octobre depuis ce même dernier octobre le trois du mois je crois depuis ce temps-là depuis trois mois depuis trois mois et une semaine je m'échine ailleurs et le très long texte n'a pas avancé d'un poil pas beaucoup sans doute est-ce mon côté velléitaire qui ne cesse de me jouer des tours et les méandres du très long texte se sont figés comme une gelée le long des parois d'un bocal de verre et je vitupère contre mes essais éphémères mon tempérament affreusement velléitaire et ce teint d'albâtre qui n'est pas le mien comme coups ces reproches en plein visage et je m'accuse d'être velléitaire aussi bien sûr pour trop entreprendre je lance cent feux il est normal qu'un certain nombre des foyers meure et même ne démarre qu'à peine avant de s'achever dans un bruit de feuilles mouillées de bois mort de bois trop vert encore pour prendre tout cela encore métaphore et toujours métaphore peut-être est-ce le mot albâtre qui appelle autant de métaphores ou bien les conditions d'écriture du très long texte que par facétie ou encore autodérision je pourrais être tenté de rebaptiser très long texte interrompu et l'adjectif interrompu ici au milieu de la ligne interrompt mes songes interrompt le torrent de sornettes lance d'autres tirades propose peut-être d'autres charades mais pour mieux me ramener vers le rivage bourbeux où je ne cesse de me lancer ces reproches à la figure velléitaire velléitaire !! `;
const pictureAndText = [
    "img/couchesoleil.jpg", text, "img/images.jpg", "img/paysage.jpg", "Lorem ipsum dolor sit amet. Aut voluptatem voluptas est maiores odio aut itaque sunt. Sed magnam magni est doloribus eius aut aliquam obcaecati et quam impedit ut praesentium suscipit!", "Lorem ipsum dolor sit amet. Aut voluptatem voluptas est maiores odio aut itaque sunt. Sed magnam magni est doloribus eius aut aliquam obcaecati et quam impedit ut praesentium suscipit!"
]
// console.log(pictureAndText);
const name = [
    'Cyril', 'Thomas', 'Olivier', 'Eric', 'Gabriel', 'Bonus'
]


const sectionNew = document.querySelector('.section-new');





for( let i=0; i < 6; i++) {
let dislike = [0, 0, 0, 0, 0, 0]
let like = [0, 0, 0, 0, 0, 0]
    
    
    
sectionNew.innerHTML += `
<section class="actuality">
<aside class="publish-by">
    <div class="small-round"></div>
        <p class="author">Publié par <strong>${name[i]}</strong> <span class="job"> developpeur-web</span>
        </p>
</aside>
<div class="picture-text">
    <p class="text">${i == 1 || i == 4 || i== 5 ? pictureAndText[i] : ""}</p>
    <figure class="picture"><img src="${i == 0 || i == 2 || i == 3 ? pictureAndText[i] : ""}" alt=""></figure>
</div>
<div class="dislike-like">
    <button class="dis-like" onclick=disLikeButton(${i})>
        <svg width="26" height="31" viewBox="0 0 26 31" fill="none">
            <path d="M16.8795 18.0833V5.16663M16.8795 18.0833H21.0471V5.16665L16.8795 5.16663M16.8795 18.0833L11.4661 25.9127C10.9525 26.6557 10.1443 26.9751 9.37854 26.7377L9.32905 26.7223C7.93101 26.2891 7.30128 24.2696 8.10053 22.7833L10.628 18.0833H5.87647C4.56147 18.0833 3.5752 16.5919 3.83307 14.9934L5.08336 7.24335C5.2782 6.03584 6.1334 5.16665 7.12676 5.16665L16.8795 5.16663" stroke="#393C38" stroke-width="2.24" stroke-linecap="round" stroke-linejoin="round"/>
        </svg><span class="counter counterdown">${dislike[i]}</span>
    </button>
    <button class="li-ke" onclick=LikeButton(${i})>
        <svg width="26" height="28" viewBox="0 0 26 28" fill="none">
            <path d="M9.08232 11.6667V23.3334M9.08232 11.6667L4.91467 11.6667V23.3334H9.08232M9.08232 11.6667L14.4957 4.59492C15.0093 3.92389 15.8174 3.63542 16.5833 3.84977L16.6327 3.86365C18.0308 4.255 18.6605 6.07904 17.8613 7.42162L15.3338 11.6667H20.0853C21.4003 11.6667 22.3866 13.0137 22.1287 14.4576L20.8784 21.4576C20.6836 22.5483 19.8284 23.3334 18.835 23.3334H9.08232" stroke="#393C38" stroke-width="2.24" stroke-linecap="round" stroke-linejoin="round"/>
        </svg><span class="counter counterup">${like[i]}</span>
    </button>
</div>
</section>
`;

    


    function disLikeButton(j) {
        const counterdown = document.querySelectorAll('.counterdown');
        const counterup = document.querySelectorAll('.counterup')
            if (like[j] >= 1) {
                like[j]--;
                counterup[j].innerHTML = like[j];
                dislike[j]++;
                counterdown[j].innerHTML = dislike[j];
            } else if (dislike[j] < 1){
                dislike[j]++;
                counterdown[j].innerHTML = dislike[j];
            } else if ( dislike[j] == 1) {
                dislike[j]--;
                counterdown[j].innerHTML = dislike[j];
            }
    }
    function LikeButton(j) {
        const counterup = document.querySelectorAll('.counterup')
        const counterdown = document.querySelectorAll('.counterdown');
           if (dislike[j] >= 1) {
                dislike[j]--;
                counterdown[j].innerHTML = dislike[j];
                like[j]++;
                counterup[j].innerHTML = like[j];
            } else if (like[j] < 1){
                like[j]++;
                counterup[j].innerHTML = like[j];
            } else if ( like[j] == 1) {
                like[j]--;
                counterup[j].innerHTML = like[j];
            }
        }
}







