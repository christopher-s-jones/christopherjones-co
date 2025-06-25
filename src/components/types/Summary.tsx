/**
 * A simplified statistics summary derived from
 * the Github GraphQL API
 */
type Summary = {
    timestamp: number,
    totalCommitContributions: number,
    totalRepositories: number,
    totalOtherContributions: number,
    repositories: Repository[]
}