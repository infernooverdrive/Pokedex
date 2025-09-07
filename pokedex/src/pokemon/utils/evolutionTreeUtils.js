export function getFullEvolutionChain(chain, details = null, base = null) {
    if (!chain || Object.keys(chain).length === 0) {
        return [];
    }
    const results = [];
    results.push({
        name: chain.species.name,
        details,
        base
    })
    for (let evolution of chain.evolves_to) {
        const details = {
            trigger: evolution.trigger?.name || null,
            min_level: evolution.min_level ?? null,
            item: evolution.item?.name || null,
            held_item: evolution.held_item?.name || null,
            known_move: evolution.known_move?.name || null,
            known_move_type: evolution.known_move_type?.name || null,
            location: evolution.location?.name || null,
            min_happiness: evolution.min_happiness ?? null,
            min_beauty: evolution.min_beauty ?? null,
            min_affection: evolution.min_affection ?? null,
            gender: evolution.gender ?? null, // 1 = female, 2 = male
            needs_overworld_rain: evolution.needs_overworld_rain || false,
            party_species: evolution.party_species?.name || null,
            party_type: evolution.party_type?.name || null,
            relative_physical_stats: evolution.relative_physical_stats ?? null, // Tyrogue logic
            time_of_day: evolution.time_of_day || null,
            trade_species: evolution.trade_species?.name || null
        }
        const base = chain.species.name;
        results.push(...getFullEvolutionChain(evolution, details, base));
    }
    return results;
}