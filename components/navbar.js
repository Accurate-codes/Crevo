class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="bg-white/80 backdrop-blur-sm fixed w-full z-50 top-0 shadow-sm">
                <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    <div class="flex flex-row justify-between h-[60px] sm:h-[70px] md:h-[80px] items-center transition-all duration-300">
                        <div class="flex-shrink-0">
                            <a href="index.html" class="flex items-center">
                                <img src="img/logo.png" alt="Crevo Logo" class="h-14 sm:h-16 md:h-20 w-auto transition-all duration-300" onerror="console.error('Logo failed to load')" onload="console.log('Logo loaded successfully')">
                            </a>
                        </div>
                        <div class="hidden md:block">
                            <div class="flex items-center space-x-1 lg:space-x-6">
                                <a href="index.html" class="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors">Home</a>
                                <a href="#about" class="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors">About</a>
                                <a href="contact.html" class="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors">Contact</a>
                            </div>
                        </div>
                        <div class="md:hidden absolute top-8 right-4">
                            <button type="button" class="mobile-menu-button text-gray-800 hover:text-blue-600 p-2 bg-gray-100 rounded-lg">
                                <i data-feather="menu" class="w-8 h-8"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Mobile menu -->
                <div class="mobile-menu hidden md:hidden bg-white border-t border-gray-100">
                    <div class="px-4 pt-2 pb-3 space-y-2">
                        <a href="index.html" class="text-gray-800 hover:text-blue-600 block px-4 py-3 rounded-lg text-lg font-medium transition-colors hover:bg-gray-50">Home</a>
                        <a href="#about" class="text-gray-800 hover:text-blue-600 block px-4 py-3 rounded-lg text-lg font-medium transition-colors hover:bg-gray-50">About</a>
                        <a href="contact.html" class="text-gray-800 hover:text-blue-600 block px-4 py-3 rounded-lg text-lg font-medium transition-colors hover:bg-gray-50">Contact</a>
                    </div>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const mobileMenuButton = this.querySelector('.mobile-menu-button');
        const mobileMenu = this.querySelector('.mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);