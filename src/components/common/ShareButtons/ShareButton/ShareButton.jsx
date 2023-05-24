import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '!/styles/constants/colors';

import { ShareButtonComponent } from './styles';
function ShareButton({ shareMessage, hashtags, socialMedia }) {
  const fbAppId = '431855430329169';

  const socialMedias = {
    Facebook: {
      href: `https://www.facebook.com/dialog/share?app_id=${fbAppId}&display=popup&quote=&href=${location.href}`,
      icon() {
        return (
          <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle
                stroke={`${colors.footer.icons}`}
                strokeWidth="2"
                cx="17"
                cy="17"
                r="16"
              />
              <path
                d="M14.729 12.32v2.36H13v2.885h1.729v8.577h3.552v-8.576h2.383s.223-1.384.332-2.897h-2.702v-1.973c0-.295.387-.691.77-.691H21V9h-2.632c-3.726 0-3.64 2.889-3.64 3.32"
                fill={`${colors.footer.icons}`}
              />
            </g>
          </svg>
        );
      },
    },
    Twitter: {
      href: `https://twitter.com/intent/tweet?hashtags=${hashtags.join(
        ',',
      )}&text=${shareMessage}`,
      icon() {
        return (
          <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle
                stroke={`${colors.footer.icons}`}
                strokeWidth="2"
                cx="17"
                cy="17"
                r="16"
              />
              <path
                d="M24.312 12.936a3.291 3.291 0 0 0 1.443-1.816 6.57 6.57 0 0 1-2.084.796 3.282 3.282 0 0 0-5.592 2.993 9.317 9.317 0 0 1-6.765-3.428 3.28 3.28 0 0 0 1.016 4.382 3.269 3.269 0 0 1-1.487-.411v.041a3.284 3.284 0 0 0 2.632 3.218 3.292 3.292 0 0 1-1.482.056 3.285 3.285 0 0 0 3.066 2.28 6.584 6.584 0 0 1-4.859 1.358 9.287 9.287 0 0 0 5.03 1.475c6.037 0 9.338-5 9.338-9.338 0-.142-.003-.284-.009-.424a6.667 6.667 0 0 0 1.638-1.7 6.562 6.562 0 0 1-1.885.518z"
                fill={`${colors.footer.icons}`}
              />
            </g>
          </svg>
        );
      },
    },
    WhatsApp: {
      href: `https://api.whatsapp.com/send?text=${shareMessage}`,
      icon() {
        return (
          <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M24.204 20.31c-.062-.03-2.384-1.202-2.797-1.354a1.577 1.577 0 0 0-.54-.122c-.314 0-.578.16-.783.474-.232.354-.934 1.194-1.151 1.446-.028.033-.067.072-.09.072-.02 0-.38-.152-.489-.2-2.491-1.108-4.382-3.773-4.641-4.223-.037-.064-.039-.094-.039-.094a.791.791 0 0 1 .136-.164c.127-.129.263-.298.396-.461.063-.077.125-.155.188-.228.192-.23.277-.407.377-.613l.052-.107c.242-.494.035-.91-.032-1.045-.054-.112-1.035-2.536-1.14-2.79-.25-.615-.581-.901-1.041-.901-.043 0 0 0-.18.008-.218.01-1.406.17-1.93.508-.558.36-1.5 1.506-1.5 3.522 0 1.815 1.124 3.528 1.607 4.18.012.015.034.05.066.097 1.848 2.765 4.152 4.814 6.488 5.77 2.25.92 3.314 1.026 3.92 1.026.254 0 .458-.02.637-.038l.114-.012c.777-.07 2.484-.976 2.873-2.081.306-.87.386-1.822.183-2.168-.14-.234-.38-.352-.684-.502"
                fill={`${colors.footer.icons}`}
              />
              <path
                d="M17.001 33c-3.143 0-6.188-.915-8.805-2.646a.533.533 0 0 0-.455-.063l-5.346 1.713 1.726-5.133a.545.545 0 0 0-.075-.49A15.863 15.863 0 0 1 1 17C1 8.178 8.178 1 17.001 1 25.823 1 33 8.178 33 17c0 8.823-7.177 16-15.999 16z"
                stroke={`${colors.footer.icons}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        );
      },
    },
  };

  return (
    <ShareButtonComponent
      data-size="large"
      href={socialMedias[socialMedia].href}
      onClick={() => {
        window.open(
          socialMedias[socialMedia].href,
          '',
          'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600',
        );
        return false;
      }}
      rel="noopener noreferrer"
      className="share-button"
      target="_blank"
      title="Compartilhar"
    >
      {socialMedias[socialMedia].icon()}
    </ShareButtonComponent>
  );
}

ShareButton.propTypes = {
  shareMessage: PropTypes.string.isRequired,
  hashtags: PropTypes.array.isRequired,
  socialMedia: PropTypes.string.isRequired,
};

export default ShareButton;
