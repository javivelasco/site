// Native
import PreFetch from 'next/prefetch'

// Packages
import isAbsoluteUrl from 'is-absolute-url'

export default ({ href, children }) => (
  <span>
    {
      isAbsoluteUrl(href) ?
        <a href={href} target="_blank" rel="noreferrer noopener">{children}</a> :
        <PreFetch href={href}><a>{children}</a></PreFetch>
    }

    <style jsx>{`
      a {
        color: #4492ff;
        text-decoration: none;
      }
    `}</style>
  </span>
)
