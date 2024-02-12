import '../styles/tokens-grid.css'

import { TokenExampleGrid } from './TokensExampleGrid'

interface TokensGridProps {
  tokens: Record<string, string>
  type: string
  hasRemValue?: boolean
}

export function TokensGrid({
  tokens,
  type,
  hasRemValue = false,
}: TokensGridProps) {
  const convertValueToPixels = (value: string): number => {
    if (hasRemValue) {
      const numericValue = Number(value.replace('rem', ''))
      return numericValue * 16
    }
    return Number(value.replace('px', ''))
  }

  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && (
            <>
              <th>Pixels</th>
              <th />
            </>
          )}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          const pixelValue = convertValueToPixels(value)
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && <td>{pixelValue}px</td>}
              <TokenExampleGrid type={type} value={value} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
