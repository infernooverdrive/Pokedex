export default function useAggregatedQueries(results) {
    const isLoading = results.some((r) => r.isLoading);
    const errors = results.filter((r) => r.isError).map((r) => r.error?.message);
    const data = results.map(({ data }) => data);

    return {
        data,
        isLoading,
        error: errors.length ? errors.join(", ") : null,
    };
}
