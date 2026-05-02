import type { ReactNode, MouseEvent } from 'react';
import { buildTripFlightUrl, buildTripTransportUrl, buildTripFlightHome, buildTripTransportHome } from '../lib/tripcom';
import { trackAffiliateClick } from '../lib/analytics';

interface BaseProps {
  /** snake_case placement tag, e.g. `hero_cta`, `transport_flight_hel_rvn`. */
  sid: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: (e: MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

interface FlightProps extends BaseProps {
  kind: 'flight';
  /** IATA code (e.g. `hel`). Lowercase. */
  from: string;
  to: string;
  depart?: string;
  returnDate?: string;
  triptype?: 'rt' | 'ow';
}

interface TransportProps extends BaseProps {
  kind: 'bus' | 'train';
  /** Display city name as Trip.com expects, e.g. `Helsinki`. */
  fromCity: string;
  toCity: string;
  depart?: string;
}

interface HomeProps extends BaseProps {
  kind: 'flight-home' | 'transport-home';
}

export type TripCTAProps = FlightProps | TransportProps | HomeProps;

/**
 * Trip.com affiliate CTA. Renders <a> with `target="_blank"` +
 * `rel="sponsored nofollow noopener"`. Tracks click via GA4
 * `affiliate_click` (partner=tripcom).
 *
 * Trip.com URLs DO NOT route through go.laplandvibes.com — go.lv is for CJ
 * partners only. Trip.com tracks via the Allianceid / SID / trip_sub*
 * params attached by the URL builders in `lib/tripcom.ts`.
 */
export default function TripCTA(props: TripCTAProps) {
  const href = buildHref(props);

  const handleClick = () => {
    trackAffiliateClick('tripcom', `${props.kind}:${props.sid}`, href);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={props.className}
      style={props.style}
      onClick={handleClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </a>
  );
}

function buildHref(p: TripCTAProps): string {
  switch (p.kind) {
    case 'flight':
      return buildTripFlightUrl({
        from: p.from,
        to: p.to,
        sid: p.sid,
        depart: p.depart,
        returnDate: p.returnDate,
        triptype: p.triptype,
      });
    case 'bus':
      return buildTripTransportUrl({
        fromCity: p.fromCity,
        toCity: p.toCity,
        tab: 'coach',
        sid: p.sid,
        depart: p.depart,
      });
    case 'train':
      return buildTripTransportUrl({
        fromCity: p.fromCity,
        toCity: p.toCity,
        tab: 'train',
        sid: p.sid,
        depart: p.depart,
      });
    case 'flight-home':
      return buildTripFlightHome(p.sid);
    case 'transport-home':
      return buildTripTransportHome(p.sid);
  }
}
