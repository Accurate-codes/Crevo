class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-[#0B2A4A] text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div class="mb-8 md:mb-0">
                            <img src="img/logo.png" alt="Crevo Logo" class="h-8 mb-4">
                            <p class="text-blue-200 text-sm">Empowering the next generation of tech talent through education and innovation.</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                               <li><a href="#about" class="text-blue-200 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="contact.html" class="text-blue-200 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Contact Info</h3>
                            <ul class="space-y-2 text-blue-200">
                                <li class="flex items-center gap-2">
                                    <i data-feather="mail" class="w-4 h-4"></i>
                                    <a href="mailto:webcompany106@gmail.com" class="hover:text-white transition-colors">webcompany106@gmail.com</a>
                                </li>
                                <li class="flex items-center gap-2">
                                    <i data-feather="phone" class="w-4 h-4"></i>
                                    <a href="tel:+1234567890" class="hover:text-white transition-colors">09126406218</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
                            <div class="flex space-x-4">
                                <a href="#" class="text-blue-200 hover:text-white transition-colors">
                                    <i data-feather="facebook" class="w-6 h-6"></i>
                                </a>
                                <a href="#" class="text-blue-200 hover:text-white transition-colors">
                                    <i data-feather="linkedin" class="w-6 h-6"></i>
                                </a>
                                <a href="#" class="text-blue-200 hover:text-white transition-colors">
                                    <i data-feather="instagram" class="w-6 h-6"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 pt-8 border-t border-blue-800 text-center text-blue-200">
                        <p>&copy; ${new Date().getFullYear()} Crevo. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);