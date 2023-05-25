import './bootstrap';

import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import intersect from '@alpinejs/intersect';
import Clipboard from "@ryangjchandler/alpine-clipboard";

window.Alpine = Alpine;

Alpine.magic('clipboard', () => subject => {
    navigator.clipboard.writeText(subject)
})

Alpine.plugin(Clipboard);
Alpine.plugin(intersect);
Alpine.plugin(focus);

Alpine.start();
